
// import css from './Slider.css';

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Slider = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
  return (
    <>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <img src='/images/sd1.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd2.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd8.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd4.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd5.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd6.jpg' alt=''/> </SwiperSlide>
        <SwiperSlide> <img src='/images/sd2.jpg' alt=''/> </SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}

export default Slider
