import { useEffect, useState } from 'react';
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
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getDetailBlog();
    }, [eventPostComment]);

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
