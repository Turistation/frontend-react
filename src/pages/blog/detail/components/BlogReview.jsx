import { useFormik } from 'formik';
import { Rating } from 'react-simple-star-rating';
import * as Yup from 'yup';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import InputArea from '../../../../components/inputArea';
import blog from '../../../../constant/api/blog';

const BlogReview = ({ data, comments, setEventPostComment }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            comment: '',
            start: 0,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            comment: Yup.string().required('Description is required'),
            star: Yup.number().required('Rating is required'),
        }),
        onSubmit: async (values) => {
            const toastId = 'addComment';
            try {
                window.showLoader(true);
                await blog.createComment({
                    ...values,
                    blogs_id: data?.id,
                });
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'info',
                    'success add comment',
                );
                formik.resetForm();
                setEventPostComment(true);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        },
    });

    return (
        <div className="px-2 mx-2 w-full flex flex-col justify-center items-center my-20">
            <div className="my-2 w-[80%]">
                <h1 className="text-2xl">Reviews</h1>
            </div>
            <div className="w-[80%] flex flex-col max-h-96 overflow-y-auto">
                {comments?.length > 0 ? (
                    comments?.map((item, idx) => (
                        <div key={idx} className="my-2 border-b">
                            <Rating
                                readonly
                                ratingValue={item.star}
                                size={30}
                            />
                            <p>{item.comment}</p>
                            <p className="pb-2 pt-5">
                                Review By <b>{item.name}</b>,{' '}
                                {new Date(
                                    item.created_at,
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>be the first to review </p>
                )}
            </div>
            <div className="w-[80%] flex flex-col my-20">
                <p>You&apos;re reviewing:</p>
                <b>Italy one of heaven place</b>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-row">
                        <p className="pr-2 pb-5">Your Rating</p>
                        <Rating
                            onClick={(value) =>
                                formik.setFieldValue('star', value)
                            }
                            ratingValue={formik.values.star}
                            size={30}
                        />
                        <p className="text-red-500">
                            {formik.errors.star}
                        </p>
                    </div>
                    <div className="w-1/4 my-3">
                        <Input
                            name="name"
                            label="Name"
                            outline
                            error={
                                formik.touched.name &&
                                formik.errors.name
                            }
                            {...formik.getFieldProps('name')}
                        />
                    </div>
                    <div className="w-1/3 my-3">
                        <InputArea
                            name="comment"
                            label="Description"
                            outline
                            error={
                                formik.touched.comment &&
                                formik.errors.comment
                            }
                            {...formik.getFieldProps('comment')}
                        />
                    </div>
                    <div className="w-1/4 my-3">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogReview;
