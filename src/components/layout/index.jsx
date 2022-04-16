import { motion } from 'framer-motion';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-screen flex flex-col"
        >
            <Header />
            {children}
            <Footer />
        </motion.div>
    );
};

export default Layout;
