import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import blog from '../../../constant/api/blog';
import ManageBlogEditContent from './components/Content';

const ManageBlogEdit = () => {
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
                    error?.response?.data?.data?.message ??
                        error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        };
        getDetailBlog();
    }, []);
    return (
        <BackOfficeLayout
            enableBackBtn
            backBtnLink="/backoffice/manageblog"
            mainTitle="Edit Blog"
        >
            <ManageBlogEditContent data={data} />
        </BackOfficeLayout>
    );
};

export default ManageBlogEdit;
