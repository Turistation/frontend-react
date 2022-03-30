import { useFormik } from 'formik';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../../../components/button';
import Input from '../../../../components/input';
import admin from '../../../../constant/api/admin';
import csrf from '../../../../constant/api/csrf';
import { setAuthentication } from '../../../../store/actions/authentication';

const LoginContent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                window.showLoader(true);
                await csrf.csrtToken();
                await admin.login(values);
                dispatch(setAuthentication(true));
                window.showLoader(false);
                navigate('/backoffice/dashboard');
            } catch (error) {
                window.showToast(
                    'login',
                    'error',
                    error?.response?.data?.data?.message ??
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
                    src="https://images.unsplash.com/photo-1493763175065-bb40a98094aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="bglogin"
                />
            </div>
            <div className="px-2 w-[23%] mt-20">
                <form
                    className="flex flex-col w-full justify-center items-center"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="w-[80%] text-center my-20">
                        <h1 className="text-5xl font-bold">Log In</h1>
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
                        <Button type="submit">Log In</Button>
                    </div>
                    <div className="flex flex-row w-[80%] my-3">
                        Don&apos;t have an account? &nbsp;{' '}
                        <Link
                            to="/register"
                            className="text-blue-600 underline"
                        >
                            Create One
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginContent;
