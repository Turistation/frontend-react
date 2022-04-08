import { useFormik } from 'formik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import admin from '../../../../constant/api/admin';
import csrf from '../../../../constant/api/csrf';

const RegisterContent = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Fullname is required'),
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match',
            ),
        }),
        onSubmit: async (values) => {
            try {
                window.showLoader(true);
                await csrf.csrtToken();
                await admin.register(values);
                window.showLoader(false);
                navigate('/backoffice/guest/login');
            } catch (error) {
                window.showToast(
                    'register',
                    'error',
                    error?.response?.data?.data?.[0] ??
                        error?.message ??
                        'Something went wrong',
                );
                window.showLoader(false);
            }
        },
    });

    return (
        <div className="flex flex-row">
            <div className="w-[77%]">
                <LazyLoadImage
                    src="https://images.unsplash.com/photo-1576019095542-78885bcf4d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="bglogin"
                />
            </div>
            <div className="px-2 w-[23%] mt-20">
                <form
                    className="flex flex-col w-full justify-center items-center"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="w-[80%] text-center my-20">
                        <h1 className="text-5xl font-bold">
                            Sign Up
                        </h1>
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        <Input
                            className="w-full"
                            name="name"
                            label="Full Name"
                            outline
                            error={
                                formik.touched.name &&
                                formik.errors.name
                            }
                            {...formik.getFieldProps('name')}
                        />
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        <Input
                            className="w-full"
                            name="email"
                            label="Email"
                            outline
                            type="email"
                            error={
                                formik.touched.email &&
                                formik.errors.email
                            }
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        <Input
                            className="w-full"
                            name="password"
                            label="Password"
                            outline
                            type="password"
                            error={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            {...formik.getFieldProps('password')}
                        />
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        <Input
                            className="w-full"
                            name="confirmPassword"
                            label="Confrimt Password"
                            outline
                            type="password"
                            error={
                                formik.touched.confirmPassword &&
                                formik.errors.confirmPassword
                            }
                            {...formik.getFieldProps(
                                'confirmPassword',
                            )}
                        />
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        <Button type="submit">Sign Up</Button>
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        Already have an account? &nbsp;{' '}
                        <Link
                            to="/backoffice/guest/login"
                            className="text-blue-600 underline"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterContent;
