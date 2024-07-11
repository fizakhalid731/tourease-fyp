"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h1style from "@/app/madinastyle/hotel1.module.css";
import  H1Slider from '@/app/madiimgcomponents/hotel1slider';
import { CiParking1 } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { RiRestaurantFill } from "react-icons/ri";
import { FaSmokingBan } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { IoWalkSharp } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
import { LuTrain } from "react-icons/lu";
import { CiPlane } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Madheader1 from '@/app/medinacomponents/madheader1'


export default function madi_hotel1(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel1_regis");
    }
    return(
        <>
        
        <Madheader1/>
       
        <button className={h1style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h1style.headings}>Anwar Al Madinah Mövenpick</h1>
        <p className={h1style.text}>The 5-star Anwar Al Madinah Mövenpick offers elegant accommodation less than 5 minutes’ walk from The Mosque of the Prophet Mohammad. 
        <br></br> It features 4 on-site restaurants. Free WiFi is available in all rooms.
        <br></br>
        <br></br>The elegant air-conditioned rooms at Anwar Al Madinah are spacious and modern. Each comes with a refrigerator,a work desk and satellite 
        <br></br> TV, as well as an en suite bathroom.
        <br></br>
        <br></br>In a prime location in the heart of the Madinah shopping district, Hotel Anwar Al Madinah is connected to a shopping centre. It is also just 4 km
        <br></br> from Mount Uhudh and 3 km from the Madinah Dates Market.</p>
        
        <p className={h1style.text}>
        </p>
        
        <p className={h1style.text}>Anwar Al Madinah Mövenpick provides laundry and dry cleaning services. It is 16 km from Prince Mohammed Bin Abdullaziz International Airport.</p> 
       
        <p className={h1style.text}>Couples particularly like the location—they rated it <span className={h1style.textbold}>8.8</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        
        <div className={h1style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.410277468775!2d39.60534057518704!3d24.471237478185515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf01b04de507%3A0xf21df2dc37cd8a86!2sAnwar%20Al%20Madinah%20M%C3%B6venpick!5e0!3m2!1sen!2s!4v1715680089967!5m2!1sen!2s"
         width="400" 
         height="350" 
         style={{border:"0"}}
         allowfullscreen="" 
         loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h1style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h1style.icondiv}>
            <span className={h1style.iconss}><CiParking1 /> <span className={h1style.iconsstext}>Parking</span></span>
            <span className={h1style.iconss1}><MdFamilyRestroom /> <span className={h1style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h1style.icondiv}>
            <span className={h1style.iconss}><IoWifiSharp /> <span className={h1style.iconsstext}>Free WiFi </span> </span>
            <span className={h1style.iconss2}><RiRestaurantFill /> <span className={h1style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h1style.icondiv}>
            <span className={h1style.iconss}><FaSmokingBan /> <span className={h1style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h1style.iconss3}><MdRoomService /> <span className={h1style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h1style.icondiv}>
            <span className={h1style.iconss}><FaWheelchair /> <span className={h1style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h1style.iconss5}><FcBusinessman /> <span className={h1style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h1style.icondiv}>
            <span className={h1style.iconss}><IoIosFitness /><span className={h1style.iconsstext}> Fitness centre </span></span>
            <span className={h1style.iconss6}><MdOutlineFreeBreakfast /> <span className={h1style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h1style.disticond}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h1style.dist}> 3.9 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h1style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h1style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h1style.dist3}>8 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h1style.dist4}> 8 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h1style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h1style.restu}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Shiraz </span>
                <span className={h1style.distt}> 10 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h1style.distt1}> 10 m</span>
                <br></br>
                <span>Restaurant.Grazie  </span>
                <span className={h1style.distt2}>350 m</span>  
            </div>
            {/* //// */}
            
            <div className={h1style.restu1}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h1style.disttt}> 4.6 Km</span>
                
            </div>

       {/*  */}

       <div className={h1style.restutrain}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station <span className={h1style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h1style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h1style.restutairport}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin <span className={h1style.distair}> 11 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H1Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}