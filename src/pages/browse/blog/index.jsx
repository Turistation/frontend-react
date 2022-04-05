import { useEffect, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import BrowseByBlogContent from './components/Content';
import BrowseByBlogSearch from './components/Search';

const BrowseByBlog = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getAllBlog = async () => {
            const toastId = 'getAllBlog';
            try {
                window.showLoader(true);
                const res = await blog.getAll();
                window.showLoader(false);
                setData(res.data?.blogs);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getAllBlog();
    }, []);
    return (
        <Layout>
            <BrowseByBlogSearch></BrowseByBlogSearch>
            <BrowseByBlogContent data={data}></BrowseByBlogContent>
        </Layout>
    );
};

export default BrowseByBlog;
