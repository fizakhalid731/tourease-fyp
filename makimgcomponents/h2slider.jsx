"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/makimgcomponents/makslider.module.css'



export default function H2Slider(){
    return(
        <div className={h1style.h1images}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >

      <SwiperSlide>
      <img src='/h2_3.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
        <img src='/h2_4.jpg' alt='h1' className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/h2_2.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h2_5.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h2_6.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h2_7.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h2_9.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h2_10.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h2_11.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h2_8.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}