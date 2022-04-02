import { showToast } from '../../helpers/toastHelper';
import store from '../../store';
import { setAuthentication } from '../../store/actions/authentication';
import { populateProfile } from '../../store/actions/users';

const PATH_REFRESH_TOKEN = '/users/refresh';

export default async function ErrorHandler(error) {
    let message;
    if (!error.response) {
        return Promise.reject(error);
    }

    const originalRequest = error.config;

    try {
        if (error.response.status >= 500) {
            throw new Error('something went terribly wrong');
        }

        if (error.response.status === 401) {
            // window.location.href = '/';
        }

        message = error?.response?.data?.message;
    } catch (error) {
        message = error?.response?.data?.message ?? error?.message;
    }

    if (originalRequest.url === PATH_REFRESH_TOKEN) {
        store.dispatch(setAuthentication(null));
        store.dispatch(populateProfile(null));
    }

    if (
        originalRequest.url === PATH_REFRESH_TOKEN &&
        message === 'session expired, please re login!'
    ) {
        showToast(message, 'error', message);
    }

    return Promise.reject(error);
}