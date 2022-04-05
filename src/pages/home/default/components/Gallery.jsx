import { useNavigate } from 'react-router-dom';
import { ArrowBigDown } from 'tabler-icons-react';

import ImageCard from '../../../../components/ImageCard';

const Gallery = ({ data }) => {
    const navigate = useNavigate();
    const getClassName = (index) => {
        if (index === 0) {
            return 'row-span-6 col-span-1';
        }
        if (index === 1) {
            return 'row-span-6 col-span-1';
        }

        if (index > 1) {
            return 'row-span-3 col-span-1';
        }
    };

    return (
        <div className="px-2 mx-2 py-10 relative">
            <div className="text-center pt-5 pb-10">
                <h1 className="text-[32px] font-bold">Gallery</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Tincidunt enim molestie massa justo
                    fermentum.Id in non nunc nulla rhoncus
                </p>
            </div>
            <div className="grid grid-rows-6 grid-cols-3 grid-flow-col gap-4 z-10 relative">
                {data?.map((item, index) => (
                    <div key={index} className={getClassName(index)}>
                        <ImageCard
                            src={item?.photos}
                            alt={item?.blogs?.[0]?.title}
                            name={item?.blogs?.[0]?.title}
                            href="#"
                            location={item?.blog_category?.name}
                        />
                    </div>
                ))}
                <div className="absolute bottom-7 z-50  w-full flex justify-center items-center mx-auto ">
                    <button
                        className="rounded-full p-3 animate-bounce"
                        style={{ backgroundColor: '#FC8868' }}
                        type="button"
                        onClick={() => navigate('/browse/gallery')}
                    >
                        <ArrowBigDown
                            color="white"
                            width={40}
                            height={40}
                            className=""
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
