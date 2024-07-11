"use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/madiimgcomponents/madslider.module.css'



export default function Slider_m3(){
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
      <img src='/mdh3_1.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_2.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_3.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
        <img src='/mdh3_4.jpg' alt='h1'  className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_5.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_6.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_7.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_8.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_9.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_10.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh3_11.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}