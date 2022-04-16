import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import Paper from '../../../../components/Paper';
import category from '../../../../constant/api/category';

const ManageCategoryEditContent = ({ data }) => {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: data?.name || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
        }),
        onSubmit: async (valeus) => {
            const toastId = 'editcategory';
            try {
                window.showLoader(true);
                await category.update(data?.id, {
                    _method: 'PUT',
                    ...valeus,
                });
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'info',
                    'success create category',
                );
                navigate('/backoffice/managecategories');
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        },
    });

    return (
        <Paper>
            <form className="p-8" onSubmit={formik.handleSubmit}>
                <div className="flex flex-row w-full my-3">
                    <Input
                        className="w-full"
                        name="name"
                        label="Name"
                        outline
                        error={
                            formik.touched.name && formik.errors.name
                        }
                        {...formik.getFieldProps('name')}
                    />
                </div>
                <div className="w-full px-2 py-3 flex justify-center">
                    <div className="w-full md:w-1/2 xl:w-1/4">
                        <Button type="submit">Save Category</Button>
                    </div>
                </div>
            </form>
        </Paper>
    );
};

export default ManageCategoryEditContent;
