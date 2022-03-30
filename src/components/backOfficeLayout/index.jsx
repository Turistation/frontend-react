import { motion } from 'framer-motion';
import { useEffect } from 'react';

import BackOfficeHeader from './Header';
import SideBar from './SideBar';

const BackOfficeLayout = ({ children, ...props }) => {
    useEffect(() => {
        document.body.classList.add('bg-theme-bg_gray');
    }, []);

    return (
        <div className="flex h-full w-full relative justify-end ">
            <SideBar />

            <div className="w-full 2xl:w-6/7 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-white w-full px-10 py-3 shadow-lg ">
                        <BackOfficeHeader {...props} />
                    </div>
                    <div className="w-full py-5 px-3 md:px-8 lg:px-12">
                        <main
                            className="mx-auto py-2.5"
                            style={{ minHeight: '79%' }}
                        >
                            {children}
                        </main>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BackOfficeLayout;
