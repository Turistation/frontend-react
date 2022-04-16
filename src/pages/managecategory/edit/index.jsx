import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import category from '../../../constant/api/category';
import ManageCategoryEditContent from './components/Content';

const ManageCategoryEdit = () => {
    const { categoryId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getDetailCategory = async () => {
            const toastId = 'getDetailCategory';
            try {
                window.showLoader(true);
                const res = await category.getById(categoryId);
                window.showLoader(false);
                setData(res.data?.category);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        };
        getDetailCategory();
    }, []);
    return (
        <BackOfficeLayout
            enableBackBtn
            backBtnLink="/backoffice/managecategories"
            mainTitle="Edit New Category"
        >
            <ManageCategoryEditContent data={data} />
        </BackOfficeLayout>
    );
};

export default ManageCategoryEdit;
