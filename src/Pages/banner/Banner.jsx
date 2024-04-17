import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-screen"
            >
                <SwiperSlide><div className='text-center text-white bg-no-repeat bg-cover h-full' style={{ backgroundImage: "url('https://i.ibb.co/GHXgFHZ/photo-1448630360428-65456885c650.jpg')" }}>fffffffff</div></SwiperSlide>
                <SwiperSlide className='text-center'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-center'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-center'>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;