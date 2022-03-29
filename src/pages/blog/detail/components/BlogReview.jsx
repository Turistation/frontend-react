import { useFormik } from 'formik';
import { Rating } from 'react-simple-star-rating';
import * as Yup from 'yup';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import InputArea from '../../../../components/inputArea';

const BlogReview = () => {
    const data = [
        {
            id: 1,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 40,
        },
        {
            id: 2,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 90,
        },
        {
            id: 3,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 30,
        },
        {
            id: 4,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 70,
        },
        {
            id: 5,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 50,
        },
        {
            id: 6,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 60,
        },
        {
            id: 7,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 90,
        },
        {
            id: 8,
            name: 'John Doe',
            date: '2019-01-01',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius volutpat dis tristique dignissim posuere pretium. Vel non hendrerit non nulla tempor consequat egestas congue elit. Amet maecenas ut at in.',
            rating: 100,
        },
    ];

    const formik = useFormik({
        initialValues: {
            name: '',
            comment: '',
            rating: 0,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            comment: Yup.string().required('Description is required'),
            rating: Yup.number().required('Rating is required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="px-2 mx-2 w-full flex flex-col justify-center items-center my-20">
            <div className="my-2 w-[80%]">
                <h1 className="text-2xl">Reviews</h1>
            </div>
            <div className="w-[80%] flex flex-col max-h-96 overflow-y-auto">
                {data.map((item, idx) => (
                    <div key={idx} className="my-2 border-b">
                        <Rating
                            readonly
                            ratingValue={item.rating}
                            size={30}
                        />
                        <p>{item.comment}</p>
                        <p className="pb-2 pt-5">
                            Review By <b>{item.name}</b>, {item.date}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-[80%] flex flex-col my-20">
                <p>You&apos;re reviewing:</p>
                <b>Italy one of heaven place</b>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-row">
                        <p className="pr-2 pb-5">Your Rating</p>
                        <Rating
                            onClick={(value) =>
                                formik.setFieldValue('rating', value)
                            }
                            ratingValue={formik.values.rating}
                            size={30}
                        />
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
