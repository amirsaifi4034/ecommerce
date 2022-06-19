
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Home_slide_item from './Home_slide_item';

export const Home_top = () => {

    const HomeSlider = [
        {
            id: 0,
            slideImg: '/images/slide1.jpg'
        },
        {
            id: 1,
            slideImg: '/images/slide2.jpg'
        },
        {
            id: 2,
            slideImg: '/images/slide3.jpg'
        }
    ];

  return (
    <>
    <Swiper className="mySwiper">
        {HomeSlider.map(HomeSlide =>
            <SwiperSlide key={HomeSlide.id}>
                <Home_slide_item home_slideItem={HomeSlide} />
            </SwiperSlide>  
        )}
    </Swiper>
    </>
  )
}


export default Home_top;