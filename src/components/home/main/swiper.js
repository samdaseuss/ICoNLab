import styles from "./styles.module.scss";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MainSwiper() {
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
        className="mainSwiper"
      >
        {/* {[...Array(10).keys()].map((i) => (
            // <SwiperSlide>
            //     <img src="/images/swiper/ad.png" alt="" />
            // </SwiperSlide>
            <SwiperSlide>
                <img src={`/images/swiper/${ i + 1 }.png`} alt="" />
            </SwiperSlide>
        ))} */}
        <SwiperSlide>
            <img src="/images/swiper/ad.png" alt="" />
            </SwiperSlide>
      </Swiper>
    </>
  );
}
