import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = () => {
    const authentication = useSelector(
        (state) => state.authentication,
    );
    const loader = useSelector((state) => state.loader);

    const redirectLggedin = localStorage.getItem('redirect');

    if (loader.isAuthenticated) {
        return <></>;
    }

    if (!loader.isAuthenticated && authentication.isAuthenticated) {
        return (
            <>
                <Navigate
                    to={`${redirectLggedin ? redirectLggedin : '/'}`}
                />
            </>
        );
    }

    return <Outlet />;
};

export default GuestRoute;
