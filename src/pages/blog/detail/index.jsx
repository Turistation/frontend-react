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

    useEffect(() => {
        const getDetailBlog = async () => {
            const toastId = 'getDetailBlog';
            try {
                window.showLoader(true);
                const res = await blog.getById(blogId);
                window.showLoader(false);
                setData(res.data?.blog);
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
    }, []);

    return (
        <Layout>
            <BlogHeader data={data} />
            <BlogGallery data={data} />
            <BlogContent data={data} />
            <BlogReview data={data} />
        </Layout>
    );
};

export default BlogDetail;
