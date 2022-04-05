import { useEffect, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import photo from '../../../constant/api/photo';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import MostPlaces from './components/MostPlaces';

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getRecent = async () => {
            try {
                window.showLoader(true);
                const [resBlog, resPhoto] = await Promise.all([
                    blog.getRecents(),
                    photo.getRecents(),
                ]);
                setData({
                    blog: resBlog?.data?.blogs,
                    photo: resPhoto?.data?.photos,
                });
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
            <MostPlaces data={data?.blog} />
            <Gallery data={data?.photo} />
        </Layout>
    );
};

export default Home;
