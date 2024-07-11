"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/makimgcomponents/makslider.module.css'



export default function H5Slider(){
    return(
        <div className={h1style.h1images}>
<Swiper
 modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide >
      <img src='/h5_1.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
    <SwiperSlide >
        <img src='/h5_2.jpg' alt='h1' className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_3.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_4.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_5.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_6.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_7.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_9.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_10.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_11.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h5_8.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}