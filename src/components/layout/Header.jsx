import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Hamburger from '../button/Hamburger';
import Logo from '../logo';

const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const location = useLocation();
    const path = location.pathname;

    const isActive = (path, navPath) => {
        return path === navPath
            ? 'text-theme-blue-300'
            : 'text-black';
    };

    const auth = useSelector((state) => state.authentication);

    const listNavbar = [
        {
            label: 'Home',
            path: '/',
            isGuest: false,
            isAuth: false,
        },
        {
            label: 'Browse By',
            path: '/browse/blog',
            isGuest: false,
            isAuth: false,
        },
        {
            label: 'Our Team',
            path: '/team',
            isGuest: false,
            isAuth: false,
        },
        {
            label: 'Dashboard',
            path: '/backoffice/dashboard',
            isGuest: false,
            isAuth: true,
        },
    ];

    return (
        <nav className="items-end lg:items-center container mx-auto py-2 relative z-20 flex flex-col lg:flex-row">
            <div className="flex px-2 mx-2 justify-between w-full lg:w-1/2 items-center">
                <Link to="/" className="">
                    <Logo />
                </Link>
                <Hamburger
                    color="bg-theme-blue-300"
                    isOpen={openNavbar}
                    onClick={() => setOpenNavbar(!openNavbar)}
                />
            </div>
            <div
                className={`px-2 py-5 mx-2 w-1/4 lg:w-1/2 absolute lg:relative block mt-12 lg:mt-0 transition-all bg-gray-100 lg:bg-transparent ${
                    openNavbar
                        ? 'opacity-100'
                        : 'opacity-0 -z-1 lg:opacity-100 lg:z-auto '
                }`}
            >
                <ul className="flex flex-col lg:flex-row items-stretch justify-end">
                    {listNavbar
                        .filter((nav) =>
                            auth?.isAuthenticated
                                ? nav.isAuth || !nav.isGuest
                                : !nav.isAuth,
                        )
                        .map((nav, index) => {
                            return (
                                <li
                                    className="py-2 lg:py-0 lg:px-8 flex items-center justify-end "
                                    key={index}
                                >
                                    <Link
                                        to={nav.path}
                                        className={`text-lg underline-transparent hover:text-theme-blue-300 ${isActive(
                                            path,
                                            nav.path,
                                        )}`}
                                    >
                                        {nav.label}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
