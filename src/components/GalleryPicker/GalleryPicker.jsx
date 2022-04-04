/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Check } from 'tabler-icons-react';

const GalleryPicker = (props) => {
    const { images, onSelected, disabled } = props;

    const [opacityOverlay, setOpacityOverlay] = useState({
        index: null,
    });

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-3">
                {images?.map((image, index) => (
                    <div
                        key={index}
                        className={`relative max-h-[232px] ${
                            !disabled && 'cursor-pointer'
                        }`}
                        onClick={() => !disabled && onSelected(index)}
                    >
                        <LazyLoadImage
                            alt={`img-${index}`}
                            src={image?.src}
                            effect="blur"
                            wrapperClassName="w-full h-full"
                            className="w-full h-full object-cover rounded-[14px]"
                        />

                        <div
                            className={`z-10 inset-0  absolute rounded-[14px] check-overlay-bg-image transition-all opacity-${
                                index === opacityOverlay.index ||
                                image?.isSelected
                                    ? '100'
                                    : '0'
                            }`}
                            onMouseEnter={() =>
                                !disabled &&
                                setOpacityOverlay({
                                    index,
                                })
                            }
                            onMouseLeave={() =>
                                !disabled &&
                                setOpacityOverlay({
                                    index: null,
                                })
                            }
                        >
                            <div className="m-3 border-2 border-white w-8 h-8 rounded-full flex justify-center items-center">
                                <Check color="white" size={30} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

GalleryPicker.propTypes = {
    images: PropTypes.array,
    onSelected: PropTypes.func,
};

export default GalleryPicker;
