import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import agusPng from '../../../../assets/agus.png';
import arfanPng from '../../../../assets/arfan.png';
import karomPng from '../../../../assets/karom.png';
import sandingPng from '../../../../assets/sanding.png';

const AboutTeam = () => {
    SwiperCore.use([Pagination, Navigation]);

    const listTeam = [
        {
            name: 'Arfan Jadulhaq',
            image: arfanPng,
        },
        {
            name: 'I Gde Bagus Janardana',
            image: agusPng,
        },
        {
            name: 'Mochammad Alfi Karom',
            image: karomPng,
        },
        {
            name: 'Sanding Adhieguna',
            image: sandingPng,
        },
    ];

    return (
        <div
            className="container mx-auto flex px-4 w-full flex-col"
            id="our-team"
        >
            <div className="flex justify-center w-full relative z-10 my-10">
                <h1 className="text-5xl pt-16">Our Team</h1>
            </div>
            <div className="bg-white relative z-10 full-shadow py-5 rounded-2xl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {listTeam.map((val, index) => (
                        <SwiperSlide key={index}>
                            <div
                                key={index}
                                className="flex flex-col items-center text-center py-12"
                            >
                                <img
                                    src={val.image}
                                    alt={val.name}
                                    className="w-56"
                                />
                                <p className="py-5">{val.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutTeam;
