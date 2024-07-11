"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h1style from "@/app/makkahstyles/hotel1.module.css";
import H1Slider from '@/app/makimgcomponents/h1slider';
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
import MakHeader1 from "@/app/makcomponents/makheader1";


export default function mak_hotel1(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel1_regis");
    }
    return(
        <>
        
        <MakHeader1/>
       
        <button className={h1style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h1style.headings}>Pullman ZamZam Makkah</h1>
        <p className={h1style.text}>Featuring 5-star accommodation, Pullman ZamZam Makkah is located 
        <br></br>in Makkah, 400 metres from Masjid Al Haram and 9.3km from HiraCave.
        <br></br> Among the facilities of this property are a restaurant, a 24-hour front 
        <br></br>desk and room service, along with free WiFi throughout the property. Private parking is available on site.</p>
        
        <p className={h1style.text}>A buffet, continental or American breakfast is available daily at the property.</p>
        
        <p className={h1style.text}>Popular points of interest near the hotel include Zamzam Well, Masjid Al Haram King Abdul Aziz Gate and Masjid Al Haram King Abdullah Expension Gate. The nearest airport is King Abdulaziz International Airport, 93 km from Pullman ZamZam Makkah.</p> 
       
        <p className={h1style.text}>Couples particularly like the location—they rated it <span className={h1style.textbold}>8.7</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}

        <div className={h1style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2444278083017!2d39.821162675092125!3d21.419635480329255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b7ed62d513%3A0xc7353680b7d8dbf8!2sPullman%20ZamZam%20Makkah!5e0!3m2!1sen!2s!4v1713096796072!5m2!1sen!2s" 
         width="400" 
         height="350" 
         style={{border:"0"}} 
         allowfullscreen="" 
         loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
       </iframe>
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
            <span className={h1style.iconss}><GiLift /><span className={h1style.iconsstext}>Lift </span></span>
            <span className={h1style.iconss6}><MdOutlineFreeBreakfast /> <span className={h1style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h1style.disticond}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h1style.dist}> 250 m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h1style.dist1}> 3.4 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h1style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h1style.dist3}>6 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h1style.dist4}>8 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h1style.dist5}>10 km</span>
                
            </div>

         {/*  */}

         <div className={h1style.restu}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.AlShorfa </span>
                <span className={h1style.distt}> 20 m</span>
                <br></br>
                <span>Restaurant.Mazaq </span>
                <span className={h1style.distt1}> 20 m</span>
                <br></br>
                <span>Restaurant.AjaRestaurant  </span>
                <span className={h1style.distt2}>20 m</span>  
            </div>
            {/* //// */}
            
            <div className={h1style.restu1}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.JabalThawr </span>
                <span className={h1style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h1style.restutrain}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h1style.disttrain}> 4 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h1style.distt1r}> 4.7 km</span>
                  
            </div>
        {/* //// */}

            <div className={h1style.restutairport}>
                <div className={h1style.disticon}>
                <span className={h1style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h1style.distair}> 68 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h1style.distt1air}> 71 km</span>
                  
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