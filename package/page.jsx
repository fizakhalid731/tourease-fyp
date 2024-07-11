"use client";

import packagestyle from '@/app/styles/package.module.css';
import Footer from '@/app/components/Footer';
import { HiArrowSmallRight } from "react-icons/hi2";
import { RiHotelFill } from "react-icons/ri";
import Link from "next/link";
import HotelsHeader from '../components/Hotelsheader';



export default function Package(){
   
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
              <img src="/pulman.jpg" alt="Big Image" className={packagestyle.hotel1img} /> 
              <span className={packagestyle.h1name}> Pullman ZamZam Makkah </span> 
              <Link  href="/mak_hotel1" className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link> </div>
              <div className={packagestyle.hotel2}> 
              <img src="/tayh1.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h2name} >Al Tayseer Towers Tuwa Hotel </span> 
              <Link  href='/mak_hotel2' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel3}> 
              <img src="/fundq.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h3name}>Snood Al-Rayyan Hotel </span> 
              <Link  href='/mak_hotel3' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
            </div>

            {/* list2 */}

            <div className={packagestyle.hotellist1}>
              <div className={packagestyle.hotel4}>
              <img src="/emaarhotel.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h4name}>Emaar Grand Hotel </span> 
              <Link  href='/mak_hotel4' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel5}> <img src="/Elafhotel.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h5name}> Elaf Al Mashaer Hotel Makkah </span>
              <Link  href='/mak_hotel5' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel6}> 
              <img src="/clockhotel.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h6name}>Makkah Clock Royal Tower, </span>
              <span className={packagestyle.h6textname}>A Fairmont Hotel  </span>
              <Link  href='/mak_hotel6' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
            </div>

            {/* list3 */}

            <div className={packagestyle.hotellist1}>
              <div className={packagestyle.hotel7}>
              <img src="/safwahhotel.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h7name}>Al Safwah Royale Orchid Hotel </span>
              <Link  href='/mak_hotel7' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>
              <div className={packagestyle.hotel8}> <img src="/anjum_hotel.jpg" alt="Big Image" className={packagestyle.hotel1img} />
              <span className={packagestyle.h8name}>Anjum Makkah Hotel </span>
              <Link  href='/mak_hotel8' className={packagestyle.h1icon} > <span> <HiArrowSmallRight/>  </span></Link></div>

            </div>
<br></br>
<br></br>
<br></br>
            <Footer/>
        </>
    )
}