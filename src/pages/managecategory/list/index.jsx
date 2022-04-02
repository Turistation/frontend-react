import { useEffect, useState } from 'react';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import category from '../../../constant/api/category';
import ListCategoryContent from './components/Content';

const ManageCategoryList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
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
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getCategoryList();
    }, []);

    return (
        <BackOfficeLayout>
            <ListCategoryContent data={data} />
        </BackOfficeLayout>
    );
};

export default ManageCategoryList;
