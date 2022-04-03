import { useEffect, useState } from 'react';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import blog from '../../../constant/api/blog';
import ManageBlogContent from './components/Content';

const ManageBlogList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getBlogList = async () => {
            try {
                window.showLoader(true);
                const res = await blog.getAll();
                const dataMapped = res?.data?.blogs?.map((item) => ({
                    ...item,
                    created_at: new Date(
                        item.created_at,
                    ).toLocaleString(),
                }));

                setData(dataMapped);
                window.showLoader(false);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    'getBlogList',
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getBlogList();
    }, []);

    return (
        <BackOfficeLayout>
            <ManageBlogContent data={data} />
        </BackOfficeLayout>
    );
};

export default ManageBlogList;
