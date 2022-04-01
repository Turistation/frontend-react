import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
    const location = useLocation();

    const authentication = useSelector(
        (state) => state.authentication,
    );
    const loader = useSelector((state) => state.loader);

    const redirectLggedin = localStorage.getItem('redirect');
    if (redirectLggedin) {
        localStorage.removeItem('redirect');
    }

    if (loader.isAuthenticated) {
        return <></>;
    }

    if (authentication.isAuthenticated) {
        return <Outlet />;
    }

    if (location.pathname !== '/backoffice/logout') {
        localStorage.setItem('redirect', location.pathname);
    }

    return (
        <>
            {!loader.isActive && (
                <Navigate to={`/backoffice/guest/login`} />
            )}
        </>
    );
};

export default ProtectedRoute;
