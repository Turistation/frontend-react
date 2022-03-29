import 'react-lazy-load-image-component/src/effects/blur.css';

import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/* eslint-disable jsx-a11y/anchor-has-content */
const ImageCard = (props) => {
    const { href, src, alt, name, location } = props;
    return (
        <div className="h-full w-full relative ">
            <LazyLoadImage
                alt={alt}
                src={src}
                effect="blur"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover rounded-[14px]"
            />

            <div className="z-10 inset-0 opacity-[60%] absolute text-overlay-bg-image"></div>
            <div className="z-20 inset-0 absolute  flex flex-col items-start justify-end m-10">
                <p className="text-white font-medium text-[33px] opacity-100 leading-[33px]">
                    {name}
                </p>
                <p className="text-white text-[22px] opacity-100 leading-[24px]">
                    {location}
                </p>
            </div>
            <a href={href} className="absolute inset-0 z-20"></a>
        </div>
    );
};

ImageCard.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default ImageCard;
