"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h7style from "@/app/madinastyle/hotel7.module.css";
import  H7Slider from '@/app/madiimgcomponents/hotel7slider';
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
import Madheader7 from '@/app/medinacomponents/madheader7'


export default function madi_hotel5(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel7_regis");
    }
    return(
        <>
     
        <Madheader7/>
       
        <button className={h7style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h7style.headings}>Al Aqeeq Madinah Hotel</h1>
        <p className={h7style.text}>Al Aqeeq Madinah Hotel is located in Medina, just a few steps from the holy Haram. Guests can enjoy free WiFi throughout the property.
        <br></br>
        <br></br>
        Rooms here will provide you with a flat-screen satellite TV, air conditioning and a minibar. Featuring a shower, private bathrooms also come with a hairdryer and free toiletries. Suites have a living room. Room service is available 24 hours.
        <br></br>
        <br></br>At Al Aqeeq Madinah Hotel you will find a 24-hour front desk and a mini-market on site. Other facilities offered include 2 restaurants, a coffee shop and shops (on site).
        <br></br>
        </p>
        
        <p className={h7style.text}>
        The hotel is 3 km from Al Noor Mall and 3.2 km from Madina Mall. The property offers on-site parking upon availability.
        </p>
   
        <p className={h7style.text}>Couples particularly like the location—they rated it <span className={h7style.textbold}>9.1</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        
        <div className={h7style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.4450456417576!2d39.604383975187055!3d24.470032128186205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfd70ecc73bd%3A0x4c65dce789386331!2sAl%20Aqeeq%20Madinah%20Hotel!5e0!3m2!1sen!2s!4v1715795151599!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h7style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h7style.icondiv}>
            <span className={h7style.iconss}><CiParking1 /> <span className={h7style.iconsstext}>Parking</span></span>
            <span className={h7style.iconss1}><MdFamilyRestroom /> <span className={h7style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h7style.icondiv}>
            <span className={h7style.iconss}><IoWifiSharp /> <span className={h7style.iconsstext}>Free WiFi </span> </span>
            <span className={h7style.iconss2}><RiRestaurantFill /> <span className={h7style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h7style.icondiv}>
            <span className={h7style.iconss}><FaSmokingBan /> <span className={h7style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h7style.iconss3}><MdRoomService /> <span className={h7style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h7style.icondiv}>
            <span className={h7style.iconss}><FaWheelchair /> <span className={h7style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h7style.iconss5}><FcBusinessman /> <span className={h7style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h7style.icondiv}>
            <span className={h7style.iconss}><GiLift /><span className={h7style.iconsstext}> Lift </span></span>
            <span className={h7style.iconss6}><MdOutlineFreeBreakfast /> <span className={h7style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h7style.disticond}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h7style.dist}> 3.7 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h7style.dist1}> 6 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h7style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h7style.dist3}>7 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h7style.dist4}> 8 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h7style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h7style.restu}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.Shiraz </span>
                <span className={h7style.distt}> 150 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h7style.distt1}> 150 m</span>
                <br></br>
                <span>Restaurant.Al Safa  </span>
                <span className={h7style.distt2}>200 m</span>  
            </div>
            {/* //// */}
            
            <div className={h7style.restu1}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h7style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h7style.restutrain}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h7style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h7style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h7style.restutairport}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h7style.distair}> 10 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H7Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}