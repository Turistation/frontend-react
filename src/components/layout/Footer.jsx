import { Link } from 'react-router-dom';

import Logo from '../logo';

const Footer = () => {
    return (
        <div className="bg-theme-gray mt-auto">
            <div className="items-end lg:items-center container w-full mx-auto py-10 relative z-20 flex flex-col  ">
                <div className="flex flex-row py-5 justify-center items-center w-full">
                    <div className="w-1/3 px-2 mx-2">
                        <Logo />
                        <p>
                            website about tourists in various parts of
                            the world by sharing information using
                            text and images along with the experiences
                            of website visitors
                        </p>
                    </div>
                    <div className="w-1/3 px-2 mx-2">
                        <h1 className="text-3xl">Contact Us</h1>
                        <p>
                            Jl. Telekomunikasi Terusan Buah Batu,
                            Bandung - 40257, Indonesia
                        </p>
                        <p>Phone: +62 812-812-812</p>
                        <p>Email: bjanardana@gmail.com</p>
                    </div>
                    <div className="w-1/3 px-2 mx-2">
                        <h1 className="text-3xl">About Us</h1>
                        <Link
                            className="hover:text-theme-blue-300"
                            to="/about"
                        >
                            About
                        </Link>
                        <br />
                        <a
                            className="hover:text-theme-blue-300"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/agusjanardana/"
                        >
                            Instagram
                        </a>
                        <br />
                        <a
                            className="hover:text-theme-blue-300"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/agus.janardana"
                        >
                            Facebook
                        </a>
                        <br />
                        <a
                            className="hover:text-theme-blue-300"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/elonmusk"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-5 border-t w-full">
                {new Date().getFullYear()} Copyright. All Rights
                Reserved.
            </div>
        </div>
    );
};

export default Footer;
