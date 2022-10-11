import {SwiperSlide, Swiper} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const Banner = () => {
  return (
    <>
        <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/images/slider1.jpg" width="100%" alt='Banner' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/slider2.jpg" width="100%" alt='Banner' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
