import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CreateContext } from '../../Provider/AuthProvider';


const Banner = () => {
    const { sliderData } = useContext(CreateContext)


    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-screen"
            >
                {
                    sliderData.map(slide => (
                        <SwiperSlide key={slide.id} className='h-full w-full relative'>
                            <div className="bg-no-repeat bg-bottom bg-cover h-full w-full" style={{ backgroundImage: `url('${slide.imageURL}')` }}>
                                <div className="h-full w-full bg-black bg-opacity-60 absolute bottom-0 left-0"></div>
                                <div className='absolute top-1/3 w-full h-full text-center p-4'>
                                    <h2 className="text-6xl lg:text-8xl text-white rajdhani font-normal">{slide.title}</h2>
                                    <p className="text-gray-300 text-xl lg:text-3xl roboto lg:px-40 font-extralight">{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;