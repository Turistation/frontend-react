import Layout from '../../../components/layout';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import MostPlaces from './components/MostPlaces';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <MostPlaces />
            <Gallery />
        </Layout>
    );
};

export default Home;
