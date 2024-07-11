"use client";

import { useEffect, useState } from "react";
import packagestyle from '@/app/styles/madihotel.module.css';
import Footer from '@/app/components/Footer';
import { HiArrowSmallRight } from "react-icons/hi2";
import { RiHotelFill } from "react-icons/ri";
import Link from "next/link";
import HotelsHeader from "../components/Hotelsheader";



export default function MadHotels(){
    
    return(
        <>
            <HotelsHeader/>
            <nav className={packagestyle.header2}>
      <Link href="/package" className={packagestyle.links}>
      <div className={packagestyle.icon}>
      <span><RiHotelFill  size={35} /></span>
      <br></br>
      <span className={packagestyle.icontext} >MAKKAH HOTELS</span>
     </div>
     </Link>
     <Link href="/madhotels" className={packagestyle.links}>
     <div className={packagestyle.icon1}>
      <span><RiHotelFill size={35} /></span>
      <br></br>
      <span className={packagestyle.icontext1}>MADINA HOTELS</span>
     </div>
     </Link>
     </nav>
            <div className={packagestyle.hotellist1}>
              <div className={packagestyle.hotel1}>
              <img src="/mdh2.jpg" alt="Big Image" className={packagestyle.hotel1img} /> 
              <span className={packagestyle.h1name}> Emaar Al Mektan Hotel </span> 
              <Link  href="/madi_hotel2" className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link> </div>
              <div className={packagestyle.hotel2}> 
              <img src="/mdh1_1.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h2name} >Anwar Al Madinah Mövenpick </span> 
              <Link  href='/madi_hotel1' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel3}> 
              <img src="/mdh3.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h3name}>Le Bosphorus Al Madinah </span> 
              <Link  href='/madi_hotel3' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
            </div>

            {/* list2 */}

            <div className={packagestyle.hotellist1}>
              <div className={packagestyle.hotel4}>
              <img src="/mdh4.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h4name}>Saja Al Madinah </span> 
              <Link  href='/madi_hotel4' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel5}> <img src="/mdh5.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h5name}> Taiba Front Hotel </span>
              <Link  href='/madi_hotel5' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel6}> 
              <img src="/mdh6.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h6name}>Pullman Zamzam Madina </span>
              <Link  href='/madi_hotel6' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
            </div>

            {/* list3 */}

            <div className={packagestyle.hotellist1}>
              <div className={packagestyle.hotel7}>
              <img src="/mdh7.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h7name}>Al Aqeeq Madinah Hotel </span>
              <Link  href='/madi_hotel7' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel8}> <img src="/mdh8.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h8name}>Saraya Harmony Hotel C </span>
              <Link  href='/madi_hotel8' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>

            </div>
<br></br>
<br></br>
<br></br>
            <Footer/>
        </>
    )
}