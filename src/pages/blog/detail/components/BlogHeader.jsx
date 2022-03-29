import { Link, useLocation } from 'react-router-dom';

const BlogHeader = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className="px-2 mx-2 w-full flex justify-center my-5">
            <div className="w-[80%] flex flex-row">
                <Link className="text-gray-400" to="/">
                    Home
                </Link>
                <p>&nbsp;/&nbsp;</p>
                <Link to={path}> Italy One Of Heaven Place</Link>
            </div>
        </div>
    );
};

export default BlogHeader;
