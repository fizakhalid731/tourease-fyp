"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h8style from "@/app/madinastyle/hotel8.module.css";
import  H8Slider from '@/app/madiimgcomponents/hotel8slider';
import { CiParking1 } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { RiRestaurantFill } from "react-icons/ri";
import { FaSmokingBan } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GiLift } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { IoWalkSharp } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
import { LuTrain } from "react-icons/lu";
import { CiPlane } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Madheader8 from '@/app/medinacomponents/madheader8'

export default function madi_hotel5(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel8_regis");
    }
    return(
        <>
        <Madheader8/>
       
        <button className={h8style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h8style.headings}>Saraya Harmony Hotel C</h1>
        <p className={h8style.text}>Saraya Harmony Hotel C is located within 2 minutes’ walking distance from Al-Masjid Al-Nabawi in Madinah. There is a 24-hour front desk, a safety deposit box, and a restaurant offering room service. Free Wi-Fi is available in public areas.
        <br></br>
        <br></br>
        The rooms are air-conditioned and feature a flat-screen TV, a fridge, and a tea/coffee maker. Wake up service is available as well.
        </p>
        
        <p className={h8style.text}>
        The airport is 15 km from Saraya Harmony Hotel C.
        </p>
   
        <p className={h8style.text}>Couples particularly like the location—they rated it <span className={h8style.textbold}>8.8</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        <div className={h8style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.59935066354!2d39.6110960751868!3d24.464681978189823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf8eadd5a283%3A0x57ad7e03e8b42aa7!2sSaraya%20Harmony!5e0!3m2!1sen!2s!4v1715797270030!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h8style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><CiParking1 /> <span className={h8style.iconsstext}>Parking</span></span>
            <span className={h8style.iconss1}><MdFamilyRestroom /> <span className={h8style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><IoWifiSharp /> <span className={h8style.iconsstext}>Free WiFi </span> </span>
            <span className={h8style.iconss2}><RiRestaurantFill /> <span className={h8style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><FaSmokingBan /> <span className={h8style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h8style.iconss3}><MdRoomService /> <span className={h8style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><FaWheelchair /> <span className={h8style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h8style.iconss5}><FcBusinessman /> <span className={h8style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><GiLift /><span className={h8style.iconsstext}> Lift </span></span>
            <span className={h8style.iconss6}><MdOutlineFreeBreakfast /> <span className={h8style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h8style.disticond}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h8style.dist}> 4.2 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h8style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h8style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h8style.dist3}>7 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h8style.dist4}> 7 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h8style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h8style.restu}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.Al Baik </span>
                <span className={h8style.distt}> 200 m</span>
                <br></br>
                <span>Cafe/bar.Starbucks </span>
                <span className={h8style.distt1}> 300 m</span>
                <br></br>
                <span>Cafe/bar.Lider Cafe  </span>
                <span className={h8style.distt2}>300 m</span>  
            </div>
            {/* //// */}
            
            <div className={h8style.restu1}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h8style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h8style.restutrain}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h8style.disttrain}> 8 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h8style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h8style.restutairport}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h8style.distair}> 11 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H8Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}