import Logo from '../logo';

const Footer = () => {
    return (
        <div className="items-end lg:items-center container mx-auto py-16 relative z-20 flex flex-col">
            <div className="flex flex-row py-10">
                <div className="w-1/4 px-2 mx-2">
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quam nunc et blandit id
                        placerat pulvinar amet accumsan.
                    </p>
                </div>
                <div className="w-1/4 px-2 mx-2">
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quam nunc et blandit id
                        placerat pulvinar amet accumsan.
                    </p>
                </div>
                <div className="w-1/4 px-2 mx-2">
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quam nunc et blandit id
                        placerat pulvinar amet accumsan.
                    </p>
                </div>
                <div className="w-1/4 px-2 mx-2">
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quam nunc et blandit id
                        placerat pulvinar amet accumsan.
                    </p>
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
