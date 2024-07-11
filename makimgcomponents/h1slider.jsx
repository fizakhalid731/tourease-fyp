"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/makimgcomponents/makslider.module.css'



export default function Slider(){
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
      <img src='/h1img2.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h1img3.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h1img4.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/h1img1.jpg' alt='h1' className={h1style.imgslide}></img> 
     </SwiperSlide>
      <SwiperSlide >
      <img src='/h1img5.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h1img6.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h1img7.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h1img8.jpg' alt='h1'className={h1style.imgslide} ></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h1img9.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src='/h1img10.jpg' alt='h1' className={h1style.imgslide}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/h1img11.jpg' alt='h1'className={h1style.imgslide}></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}