import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';

const BlogGallery = ({ data }) => {
    // const images = [
    //     {
    //         original: 'https://picsum.photos/id/1018/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1018/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1015/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1019/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1020/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1020/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1021/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1021/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1023/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1023/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1015/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1010/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1010/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1012/1000/600/',
    //         thumbnail: 'https://picsum.photos/id/1012/250/150/',
    //     },
    // ];
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
                    slideOnThumbnailOver={true}
                />
            </div>
        </div>
    );
};

export default BlogGallery;
