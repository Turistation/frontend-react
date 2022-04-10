import Logo from '../logo';

const Footer = () => {
    return (
        <div className="items-end lg:items-center container mx-auto py-16 relative z-20 flex flex-col">
            <div className="flex flex-row py-10">
                <div className="w-1/3 px-2 mx-2">
                    <Logo />
                    <p>
                        website about tourists in various parts of the
                        world by sharing information using text and
                        images along with the experiences of website
                        visitors
                    </p>
                </div>
                <div className="w-1/3 px-2 mx-2">
                    <h1 className="text-3xl">Contact Us</h1>
                    <p>
                        Jl. Telekomunikasi Terusan Buah Batu, Bandung
                        - 40257, Indonesia
                    </p>
                    <p>Phone: +62 812-812-812</p>
                    <p>Email: bjanardana@gmail.com</p>
                </div>
                <div className="w-1/3 px-2 mx-2">
                    <h1 className="text-3xl">About Us</h1>
                    <p>Our Team</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
            <div className="text-center py-5 border-t w-screen -ml-[199.02px] absolute bottom-0">
                {new Date().getFullYear()} Copyright. All Rights
                Reserved.
            </div>
            <div className="bg-theme-gray absolute inset-0 w-screen -ml-[199.02px] -z-20"></div>
        </div>
    );
};

export default Footer;
