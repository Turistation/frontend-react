import Layout from '../../../components/layout';
import BlogContent from './components/BlogContent';
import BlogGallery from './components/BlogGallery';
import BlogHeader from './components/BlogHeader';
import BlogReview from './components/BlogReview';

const BlogDetail = () => {
    return (
        <Layout>
            <BlogHeader />
            <BlogGallery />
            <BlogContent />
            <BlogReview />
        </Layout>
    );
};

export default BlogDetail;
