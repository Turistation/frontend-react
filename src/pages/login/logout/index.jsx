import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import admin from '../../../constant/api/admin';
import { setAuthentication } from '../../../store/actions/authentication';
import { populateProfile } from '../../../store/actions/users';

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            try {
                window.showLoader(true);
                await admin.logout();
                window.showLoader(false);
                dispatch(setAuthentication(false));
                dispatch(populateProfile(null));
                navigate('/');
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
        };
        logout();
    }, []);

    return <></>;
};

export default LogoutPage;
