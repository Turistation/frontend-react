import { motion } from 'framer-motion';

import Header from './Header';

const Layout = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full"
        >
            <Header />
            <main className="mx-auto px-3 py-2.5 min-h-[79%]">
                {children}
            </main>
        </motion.div>
    );
};

export default Layout;
