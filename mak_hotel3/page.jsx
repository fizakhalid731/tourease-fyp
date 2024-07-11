"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h3style from "@/app/makkahstyles/hotel3.module.css";
import H3Slider from '@/app/makimgcomponents/h3slider';
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
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { useRouter } from "next/navigation";
import MakHeader3 from "@/app/makcomponents/makheader3";


export default function mak_hotel3(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel3_regis");
    }
    return(
        <>
        <MakHeader3/>
       
        <button className={h3style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h3style.headings}>Snood Al-Rayyan Hotel</h1>
        <p className={h3style.text}>The rooms in the hotel are fitted with a kettle. Rooms are fitted with a private bathroom with a bidet, free toiletries  
        <br></br>and slippers. At فندق سنود الريان each room includes air conditioning and a flat-screen TV. 
        <br></br>Languages spoken at the 24-hour front desk include Arabic and English.
        <br></br> Popular points of interest near the accommodation include Masjid Al Haram King Abdul Aziz Gate, Masjid Al Haram 
        <br></br>King Abdullah Expension Gate and Masjid Al Haram Ajyad Gate. 
        <br></br>The nearest airport is King Abdulaziz International Airport, 96 km from فندق سنود الريان.
        </p>
        <p className={h3style.text}>Couples particularly like the location—they rated it <span className={h3style.textbold}>8.0</span> for a two-person 
        <br></br>trip.</p>
        
        {/* map */}
        
        <div className={h3style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5125354777106!2d39.82643527509199!3d21.409090280337143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205ebdec57cc9%3A0xe91627846528c57c!2z2YHZhtiv2YIg2LPZhtmI2K8g2KfZhNix2YrYp9mGIHwgU25vb2QgQWwtUmF5eWFuIEhvdGVs!5e0!3m2!1sen!2s!4v1714407397335!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}} 
        allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h3style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><CiParking1 /> <span className={h3style.iconsstext}>Parking</span></span>
            <span className={h3style.iconss1}><TbAirConditioning /> <span className={h3style.iconsstext}>Air conditioning</span></span>
            </div>
            <br></br>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><IoWifiSharp /> <span className={h3style.iconsstext}>Free WiFi </span> </span>
            <span className={h3style.iconss2}><RiRestaurantFill /> <span className={h3style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><FaSmokingBan /> <span className={h3style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h3style.iconss3}><MdRoomService /> <span className={h3style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><FaWheelchair /> <span className={h3style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h3style.iconss5}><FcBusinessman /> <span className={h3style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><GiLift /><span className={h3style.iconsstext}>Lift </span></span>
            <span className={h3style.iconss6}><MdOutlineFreeBreakfast /> <span className={h3style.iconsstext}>Tea/coffee maker</span></span>
           
            </div>
            <br></br>

            {/* //// */}
            <div className={h3style.disticond}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h3style.dist}> 1.5 km</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h3style.dist1}> 4.6 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h3style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h3style.dist3}>5 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h3style.dist4}>7 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h3style.dist5}>8 km</span>
                
            </div>

         {/*  */}

         <div className={h3style.restu}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.Tayyibah Restaurant </span>
                <span className={h3style.distt}>300 m</span>
                <br></br>
                <span>Cafe/bar.Cafeteria Retaaj </span>
                <span className={h3style.distt1}>850 m</span>
                <br></br>
                <span>RestaurantAjwaa Restaurant </span>
                <span className={h3style.distt2}>1.1 m</span>  
            </div>
            {/* //// */}
            
            <div className={h3style.restu1}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Jabal Thawr </span>
                <span className={h3style.disttt}> 4.1 Km</span>
                
            </div>

       {/*  */}

       <div className={h3style.restutrain}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h3style.disttrain}> 4.5 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h3style.distt1r}> 4.4  km</span>
                  
            </div>
        {/* //// */}

            <div className={h3style.restutairport}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h3style.distair}> 69 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h3style.distt1air}> 70 km</span>
                  
            </div>

            {/* slider */}

         <div>
            <H3Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}