import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalLoader from './components/GlobalLoader';
import GuestRoute from './components/routers/GuestRoute';
import ProtectedRoute from './components/routers/ProtectedRoute';
import { showToast } from './helpers/toastHelper';
import BlogDetail from './pages/blog/detail';
import Dashboard from './pages/dashboard/default';
import Home from './pages/home/default';
import LoginPage from './pages/login/default';
import ManageBlogAdd from './pages/manageblog/add';
import ManageBlogList from './pages/manageblog/list';
import NotFound from './pages/notfound/default';
import RegisterPage from './pages/register/defualt';
import { setLoader, setLoaderIsAuth } from './store/actions/loader';

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

    return (
        <div className="App">
            <GlobalLoader />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/blog/:blogId"
                    element={<BlogDetail />}
                />

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
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
