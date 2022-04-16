import notFoundImg from '../../../assets/404png.png';
import Layout from '../../../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="w-full flex justify-center items-center h-[550px]">
                <img src={notFoundImg} alt="Not Found" />
            </div>
        </Layout>
    );
};

export default NotFound;
