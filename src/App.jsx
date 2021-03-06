import 'react-toastify/dist/ReactToastify.min.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalLoader from './components/GlobalLoader';
import GuestRoute from './components/routers/GuestRoute';
import ProtectedRoute from './components/routers/ProtectedRoute';
import admin from './constant/api/admin';
import NavigateSetter from './helpers/NavigateSetter';
import { showToast } from './helpers/toastHelper';
import AboutPage from './pages/about/default';
import BlogDetail from './pages/blog/detail';
import BrowseByBlog from './pages/browse/blog';
import BrowseByGallery from './pages/browse/gallery';
import Dashboard from './pages/dashboard/default';
import Home from './pages/home/default';
import LoginPage from './pages/login/default';
import LogoutPage from './pages/login/logout';
import ManageBlogAdd from './pages/manageblog/add';
import ManageBlogEdit from './pages/manageblog/edit';
import ManageBlogList from './pages/manageblog/list';
import ManageCategoryAdd from './pages/managecategory/add';
import ManageCategoryEdit from './pages/managecategory/edit';
import ManageCategoryList from './pages/managecategory/list';
import NotFound from './pages/notfound/default';
import RegisterPage from './pages/register/defualt';
import { setAuthentication } from './store/actions/authentication';
import { setLoader, setLoaderIsAuth } from './store/actions/loader';
import { populateProfile } from './store/actions/users';

function App() {
    const dispatch = useDispatch();

    const showLoader = (show) => {
        dispatch(setLoader(show));
    };
    const setLoaderIsAuthForWindow = (isAuth) => {
        dispatch(setLoaderIsAuth(isAuth));
    };

    window.showToast = showToast;
    window.showLoader = showLoader;
    window.setLoaderIsAuth = setLoaderIsAuthForWindow;

    useEffect(() => {
        const getProfile = async () => {
            try {
                window.showLoader(true);
                window.setLoaderIsAuth(true);
                const response = await admin.getProfile();
                dispatch(populateProfile(response?.data?.user));
                dispatch(setAuthentication(true));
                window.showLoader(false);
            } catch (error) {
                window.showLoader(false);
            }
        };
        getProfile();
        document.title = 'Turistation';
    }, []);

    return (
        <div className="App">
            <NavigateSetter />
            <GlobalLoader />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/blog/:blogId"
                    element={<BlogDetail />}
                />
                <Route
                    path="/browse/blog"
                    element={<BrowseByBlog />}
                />
                <Route
                    path="/browse/gallery"
                    element={<BrowseByGallery />}
                />

                <Route path="/about" element={<AboutPage />} />

                <Route
                    path="/backoffice/guest/"
                    element={<GuestRoute />}
                >
                    <Route path="login" element={<LoginPage />} />
                    <Route
                        path="register"
                        element={<RegisterPage />}
                    />
                </Route>
                <Route
                    path="/backoffice/"
                    element={<ProtectedRoute />}
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route
                        path="manageblog"
                        element={<ManageBlogList />}
                    />
                    <Route
                        path="manageblog/add"
                        element={<ManageBlogAdd />}
                    />
                    <Route
                        path="manageblog/edit/:blogId"
                        element={<ManageBlogEdit />}
                    />
                    <Route
                        path="managecategories"
                        element={<ManageCategoryList />}
                    />
                    <Route
                        path="managecategories/add"
                        element={<ManageCategoryAdd />}
                    />
                    <Route
                        path="managecategories/edit/:categoryId"
                        element={<ManageCategoryEdit />}
                    />
                    <Route path="logout" element={<LogoutPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
