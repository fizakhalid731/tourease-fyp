"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/makimgcomponents/makslider.module.css'



export default function H6Slider(){
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
    <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_1.jpg' alt='h1' ></img>
      </SwiperSlide>
    <SwiperSlide className={h1style.h1gallery}>
        <img src='/h6_2.jpg' alt='h1' ></img> 
     </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_3.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_4.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_5.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_6.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_7.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_9.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_10.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h6_11.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h5_8.jpg' alt='h1' ></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}