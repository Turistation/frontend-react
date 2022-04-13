import { useEffect, useState } from 'react';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import blog from '../../../constant/api/blog';
import ManageBlogContent from './components/Content';

const ManageBlogList = () => {
    const [data, setData] = useState([]);
    const [eventDelete, setEventDelete] = useState(true);

    useEffect(() => {
        if (!eventDelete) {
            return;
        }
        const getBlogList = async () => {
            try {
                window.showLoader(true);
                const res = await blog.getAllForAdmin();
                const dataMapped = res?.data?.blogs?.map((item) => ({
                    ...item,
                    created_at: new Date(
                        item.created_at,
                    ).toLocaleString(),
                }));

                setData(dataMapped);
                window.showLoader(false);
                setEventDelete(false);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    'getBlogList',
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
                setEventDelete(false);
            }
        };
        getBlogList();
    }, [eventDelete]);

    return (
        <BackOfficeLayout>
            <ManageBlogContent
                data={data}
                setEventDelete={setEventDelete}
            />
        </BackOfficeLayout>
    );
};

export default ManageBlogList;
