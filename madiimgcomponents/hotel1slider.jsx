"use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/madiimgcomponents/madslider.module.css'



export default function Slider_m1(){
    return(
        <div className={h1style.h1images}>
       
       <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >

      <SwiperSlide >
      <img src='/mdh1_13.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_2.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_3.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
        <img src='/mdh1_4.jpg' alt='h1'  className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_5.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_6.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_7.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_8.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_9.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_10.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh1_11.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}