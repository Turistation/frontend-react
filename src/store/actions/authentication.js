import { SET_AUTHENTICATION_TOKEN } from '../../constant/types/authentication';

export const setAuthentication = (isAuthenticated = false) => ({
    type: SET_AUTHENTICATION_TOKEN,
    payload: isAuthenticated,
});
