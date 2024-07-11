"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h2style from "@/app/madinastyle/hotel2.module.css";
import  H2Slider from '@/app/madiimgcomponents/hotel2slider';
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
import Madheader2 from '@/app/medinacomponents/madheader2'


export default function madi_hotel2(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel2_regis");
    }
    return(
        <>
        <Madheader2/>
       
        <button className={h2style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h2style.headings}>Emaar Al Mektan Hotel</h1>
        <p className={h2style.text}>Emaar Al Mektan Hotel Just a 375 metres' walk from the holy Prophet’s Mosque, Emaar Al Mektan Hotel is located in Medina. Free WiFi is 
        <br></br>available in the public areas. It offers a restaurant with a 24-hour room service and a gift shop.
        <br></br>
        <br></br>All rooms at Emaar Al Mektan are decorated in warm and elegant tones. Each unit offers a small seating area with a flat-screen TV and a minibar.
        <br></br>The suite includes a living room and a kitchenette.  A bath or a shower is fitted in the bathroom.
        <br></br>
        <br></br>At Emaar Al Mektan Hotel you will find a 24-hour front desk. Other facilities offered include shops (on site) and
        <br></br>ironing service.</p>
        
        <p className={h2style.text}>
        Prince Mohammad Bin Abdul Aziz Airport is within a 15-minute drive away from Emaar Al Mektan.
        </p>
   
        <p className={h2style.text}>Couples particularly like the location—they rated it <span className={h2style.textbold}>9.3</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
         
        <div className={h2style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.515308298992!2d39.602119175187!3d24.467596078187782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf0410d2ef09%3A0xf27f4abee3ed7480!2sEmaar%20Mektan%20Hotel!5e0!3m2!1sen!2s!4v1715774707939!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h2style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><CiParking1 /> <span className={h2style.iconsstext}>Parking</span></span>
            <span className={h2style.iconss1}><MdFamilyRestroom /> <span className={h2style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><IoWifiSharp /> <span className={h2style.iconsstext}>Free WiFi </span> </span>
            <span className={h2style.iconss2}><RiRestaurantFill /> <span className={h2style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><FaSmokingBan /> <span className={h2style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h2style.iconss3}><MdRoomService /> <span className={h2style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><FaWheelchair /> <span className={h2style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h2style.iconss5}><FcBusinessman /> <span className={h2style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><IoIosFitness /><span className={h2style.iconsstext}> Fitness centre </span></span>
            <span className={h2style.iconss6}><MdOutlineFreeBreakfast /> <span className={h2style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h2style.disticond}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h2style.dist}> 4.4 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h2style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h2style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h2style.dist3}>8 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h2style.dist4}> 8 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h2style.dist5}>11 km</span>
                
            </div>

         {/*  */}

         <div className={h2style.restu}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Shiraz </span>
                <span className={h2style.distt}> 500 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h2style.distt1}> 500 m</span>
                <br></br>
                <span>Cafe/bar.Lider Cafe  </span>
                <span className={h2style.distt2}>650 m</span>  
            </div>
            {/* //// */}
            
            <div className={h2style.restu1}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h2style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h2style.restutrain}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h2style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h2style.distt1r}> 5 km</span>
                  
            </div>
        {/* //// */}

            <div className={h2style.restutairport}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h2style.distair}> 11 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H2Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}