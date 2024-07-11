"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import h1style from '@/app/makimgcomponents/makslider.module.css'



export default function H7Slider(){
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
      <img src='/h7_1.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
        <img src='/h7_2.jpg' alt='h1' ></img> 
     </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_3.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_4.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_5.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_6.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_7.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_9.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_10.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_11.jpg' alt='h1' ></img>
      </SwiperSlide>
      <SwiperSlide className={h1style.h1gallery}>
      <img src='/h7_8.jpg' alt='h1' ></img>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}