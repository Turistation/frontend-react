import { LazyLoadImage } from 'react-lazy-load-image-component';

const BrowseByGalleryHeader = ({ total }) => {
    return (
        <div className="mt-10">
            <div className="relative">
                <LazyLoadImage
                    src="https://images.unsplash.com/photo-1469155669032-d47a7c1914d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                    alt="bgsearch"
                    className="w-full max-h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute top-0  text-center w-full h-full flex items-center justify-center ">
                    <h1 className="text-6xl text-white">
                        {total > 0
                            ? `${total} Gallery Found`
                            : 'Empty Gallery'}
                    </h1>
                </div>
            </div>
        </div>
    );
};
export default BrowseByGalleryHeader;
