import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import BlogContent from './components/BlogContent';
import BlogGallery from './components/BlogGallery';
import BlogHeader from './components/BlogHeader';
import BlogReview from './components/BlogReview';

const BlogDetail = () => {
    const { blogId } = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState(null);
    const [eventPostComment, setEventPostComment] = useState(true);
    const [eventAfterSuccessGetBlog, setEventAfterSuccessGetBlog] =
        useState(false);
    const firstRender = useRef(true);

    useEffect(() => {
        if (!eventPostComment) {
            return;
        }
        const getDetailBlog = async () => {
            const toastId = 'getDetailBlog';
            try {
                window.showLoader(true);
                const [resBlog, resComment] = await Promise.all([
                    blog.getById(blogId),
                    blog.getComments(blogId),
                ]);
                window.showLoader(false);
                setData(resBlog.data?.blog);
                setComments(resComment.data?.comments);
                setEventPostComment(false);
                setEventAfterSuccessGetBlog(true);
            } catch (error) {
                window.showLoader(false);

                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.data?.message ??
                        error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        };
        getDetailBlog();
    }, [eventPostComment]);

    useEffect(() => {
        if (!eventAfterSuccessGetBlog && !firstRender.current) return;
        if (eventAfterSuccessGetBlog && firstRender.current) {
            blog.countVisitor(blogId);
            setEventAfterSuccessGetBlog(false);
            firstRender.current = false;
        }
    }, [eventAfterSuccessGetBlog]);

    return (
        <Layout>
            <BlogHeader data={data} />
            <BlogGallery data={data} />
            <BlogContent data={data} />
            <BlogReview
                data={data}
                comments={comments}
                setEventPostComment={setEventPostComment}
            />
        </Layout>
    );
};

export default BlogDetail;
