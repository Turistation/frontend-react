import { useEffect, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import MostPlaces from './components/MostPlaces';

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getRecent = async () => {
            try {
                window.showLoader(true);
                const res = await blog.getRecents();
                setData(res.data);
                window.showLoader(false);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    'getRecent',
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getRecent();
    }, []);

    return (
        <Layout>
            <Hero />
            <MostPlaces data={data?.blogs} />
            <Gallery />
        </Layout>
    );
};

export default Home;
