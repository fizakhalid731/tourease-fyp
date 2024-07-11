"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h2style from "@/app/makkahstyles/hotel2.module.css";
import H2Slider from '@/app/makimgcomponents/h2slider';
import { CiParking1 } from "react-icons/ci";
import { IoWifiSharp } from "react-icons/io5";
import { RiRestaurantFill } from "react-icons/ri";
import { FaSmokingBan } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GiLift } from "react-icons/gi";
import { IoWalkSharp } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
import { LuTrain } from "react-icons/lu";
import { CiPlane } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { useRouter } from "next/navigation";
import MakHeader2 from "@/app/makcomponents/makheader2";


export default function mak_hotel2(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel2_regis");
    }
    return(
        <>
        <MakHeader2/>
       
        <button className={h2style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h2style.headings}>Al Tayseer Towers Tuwa Hotel</h1>
        <p className={h2style.text}>All units will provide you with a flat-screen TV, air-conditioning and a seating area. There is also a refrigerator. 
        <br></br>Featuring a shower, private bathrooms also come with a hairdryer and free toiletries. 
        <br></br>At Al Tayseer Towers Tuwa Hotel فندق ابراج التيسير طوى you will find a 24-hour front desk and a restaurant. Other facilities offered include luggage storage.
        <br></br> Al Hijaz Mall and Al Diyafah Mall are a 15-minute drive away from the property.
        Jeddah International Airport is 60 minutes away by car.</p>
        
        {/* map */}

        <div className={h2style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.043773279575!2d39.81123247509252!3d21.42752438032342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4c64baaa6f%3A0x2c1cf03fc5ab99e0!2sAltayseer%20Towers%20Hotel%20masjid%20taseer%20k%20pass!5e0!3m2!1sen!2s!4v1713959450036!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}} 
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h2style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h2style.icondiv}>
            <span className={h2style.iconss}><CiParking1 /> <span className={h2style.iconsstext}>Parking</span></span>
            <span className={h2style.iconss1}><TbAirConditioning /> <span className={h2style.iconsstext}>Air conditioning</span></span>
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
            <span className={h2style.iconss}><GiLift /><span className={h2style.iconsstext}>Lift </span></span>
            <span className={h2style.iconss6}><MdOutlineLocalLaundryService /> <span className={h2style.iconsstext}> Laundry </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h2style.disticond}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h2style.dist}> 1.4  m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h2style.dist1}> 2.2 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h2style.dist2}>16 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h2style.dist3}>8 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h2style.dist4}>9 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h2style.dist5}>11 km</span>
                
            </div>

         {/*  */}

         <div className={h2style.restu}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Cafe/bar.Mamma Bunz Cafe </span>
                <span className={h2style.distt}>950 m</span>
                <br></br>
                <span>Restaurant.Al Baik </span>
                <span className={h2style.distt1}> 1 m</span>
                <br></br>
                <span>Cafe/bar.Ashoor Cafe   </span>
                <span className={h2style.distt2}>1.1 m</span>  
            </div>
            {/* //// */}
            
            <div className={h2style.restu1}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Al Noor Moun </span>
                <span className={h2style.disttt}> 6 Km</span>
                
            </div>

       {/*  */}

       <div className={h2style.restutrain}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h2style.disttrain}> 3 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h2style.distt1r}> 6  km</span>
                  
            </div>
        {/* //// */}

            <div className={h2style.restutairport}>
                <div className={h2style.disticon}>
                <span className={h2style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h2style.distair}> 67 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h2style.distt1air}> 72 km</span>
                  
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