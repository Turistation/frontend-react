import { useEffect, useState } from 'react';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import category from '../../../constant/api/category';
import ListCategoryContent from './components/Content';

const ManageCategoryList = () => {
    const [data, setData] = useState([]);
    const [eventDelete, setEventDelete] = useState(true);

    useEffect(() => {
        if (!eventDelete) return;
        const getCategoryList = async () => {
            const toastId = 'getCategoryList';
            try {
                window.showLoader(true);
                const res = await category.getAll();

                const dataMapped = res?.data?.categories?.map(
                    (item) => ({
                        ...item,
                        created_at: new Date(
                            item.created_at,
                        ).toLocaleString(),
                    }),
                );
                setData(dataMapped);
                window.showLoader(false);
                setEventDelete(false);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
                setEventDelete(false);
            }
        };
        getCategoryList();
    }, [eventDelete]);

    return (
        <BackOfficeLayout>
            <ListCategoryContent
                data={data}
                setEventDelete={setEventDelete}
            />
        </BackOfficeLayout>
    );
};

export default ManageCategoryList;
