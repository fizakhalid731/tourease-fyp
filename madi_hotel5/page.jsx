"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h5style from "@/app/madinastyle/hotel5.module.css";
import  H5Slider from '@/app/madiimgcomponents/hotel5slider';
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
import Madheader5 from '@/app/medinacomponents/madheader5'


export default function madi_hotel5(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel5_regis");
    }
    return(
        <>
         
        <Madheader5/>
       
        <button className={h5style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h5style.headings}>Taiba Front Hotel</h1>
        <p className={h5style.text}>Taiba Front Madinah Hotel, few minutes’ walk from the Prophet Holy Mosque. it offers modern accommodations. Each comes with work desk and flat Screen TV, air conditioning and feature views over the Prophet Holy Mosque.
        <br></br>
        <br></br>
        We at Taiba Front Hotel provide free Wi-Fi service in the entire property, paid parking based on availability, and 24-hour front desk.
        <br></br>
        <br></br>Guests can enjoy a meal of Arabian & International delicacies in our two large Restaurants while admiring the view of the Holy Mosque.
        <br></br>Taiba Front Hotel offers 24-hour Room Service as well. The coffee shop at the lobby offers a variety of hot and cold beverages.
        <br></br>
        </p>
        
        <p className={h5style.text}>
        Taiba Front Hotel has a Commercial Mall. Prince Mohammad bin Abdulaziz International Airport is just 25-minute drive away from the accommodation.
        </p>
   
        <p className={h5style.text}>Couples particularly like the location—they rated it <span className={h5style.textbold}>9.3</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        
        <div className={h5style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.396777633007!2d39.60681517518707!3d24.471705478185104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf0014667a0d%3A0x46a795798a5df771!2sTaiba%20Front%20Hotel!5e0!3m2!1sen!2s!4v1715789886986!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h5style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h5style.icondiv}>
            <span className={h5style.iconss}><CiParking1 /> <span className={h5style.iconsstext}>Parking</span></span>
            <span className={h5style.iconss1}><MdFamilyRestroom /> <span className={h5style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h5style.icondiv}>
            <span className={h5style.iconss}><IoWifiSharp /> <span className={h5style.iconsstext}>Free WiFi </span> </span>
            <span className={h5style.iconss2}><RiRestaurantFill /> <span className={h5style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h5style.icondiv}>
            <span className={h5style.iconss}><FaSmokingBan /> <span className={h5style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h5style.iconss3}><MdRoomService /> <span className={h5style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h5style.icondiv}>
            <span className={h5style.iconss}><FaWheelchair /> <span className={h5style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h5style.iconss5}><FcBusinessman /> <span className={h5style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h5style.icondiv}>
            <span className={h5style.iconss}><GiLift /><span className={h5style.iconsstext}> Lift </span></span>
            <span className={h5style.iconss6}><MdOutlineFreeBreakfast /> <span className={h5style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h5style.disticond}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h5style.dist}> 3.7 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h5style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h5style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h5style.dist3}>7 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h5style.dist4}> 7 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h5style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h5style.restu}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Shiraz </span>
                <span className={h5style.distt}> 200 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h5style.distt1}> 200 m</span>
                <br></br>
                <span>Restaurant.Al Safa   </span>
                <span className={h5style.distt2}>250 m</span>  
            </div>
            {/* //// */}
            
            <div className={h5style.restu1}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h5style.disttt}> 4.5 Km</span>
                
            </div>

       {/*  */}

       <div className={h5style.restutrain}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h5style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h5style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h5style.restutairport}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h5style.distair}> 10 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H5Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}