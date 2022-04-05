import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';

const BlogGallery = ({ data }) => {
    return (
        <div className="px-2 mx-2 w-full flex justify-center">
            <div className="w-[80%]">
                <ImageGallery
                    items={
                        data?.photos?.map((item) => ({
                            original: item?.photos,
                            thumbnail: item?.photos,
                        })) ?? []
                    }
                    thumbnailPosition="right"
                    showFullscreenButton={false}
                    lazyLoad={false}
                    showPlayButton={false}
                    showNav={false}
                    showThumbnails={data?.photos?.length > 1}
                />
            </div>
        </div>
    );
};

export default BlogGallery;
