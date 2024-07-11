"use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/madiimgcomponents/madslider.module.css'



export default function Slider_m4(){
    return(
        <div className={h1style.h1images}>
       
       <Swiper
       spaceBetween={50}
       slidesPerView={1}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >

      <SwiperSlide >
      <img src='/mdh4_1.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_2.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_3.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
        <img src='/mdh4_4.jpg' alt='h1'  className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_5.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_6.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_7.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_8.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_9.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_10.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh4_11.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}