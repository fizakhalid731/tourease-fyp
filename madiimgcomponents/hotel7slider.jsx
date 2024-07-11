"use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/madiimgcomponents/madslider.module.css'



export default function Slider_m7(){
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
      <img src='/mdh7_1.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_2.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_3.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
        <img src='/mdh7_4.jpg' alt='h1'  className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_5.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_6.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_7.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_8.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_9.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_10.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/mdh7_11.jpg' alt='h1'  className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}