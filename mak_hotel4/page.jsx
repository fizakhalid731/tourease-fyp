"use client";

import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import h4style from "@/app/makkahstyles/hotel4.module.css";
import H4Slider from '@/app/makimgcomponents/h4slider';
import { CiParking1 } from "react-icons/ci";
import { IoWifiSharp } from "react-icons/io5";
import { RiRestaurantFill } from "react-icons/ri";
import { FaSmokingBan } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GiLift } from "react-icons/gi";
import { IoWalkSharp } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
import { LuTrain } from "react-icons/lu";
import { CiPlane } from "react-icons/ci";
import { useRouter } from "next/navigation";
import MakHeader4 from "@/app/makcomponents/makheader4";


export default function mak_hotel4(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel4_regis");
    }
    return(
        <>
    
        <MakHeader4/>
       
        <button className={h4style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h4style.headings}>Emaar Grand Hotel</h1>
        <h3 className={h4style.text}>Get the celebrity treatment with world-class service at Emaar Grand Hotel</h3>
        <p className={h4style.text}>Just a 750 metre from the holy Haram, Emaar Grand Hotel is set in the lively Ibrahim Al Khalil Street in Mecca. 
        <br></br>features elegantly decorated rooms and a restaurant that offers a 24-hour rooms service.
        <br></br>Fitted with blue carpeted and tiled floors, all rooms at Emaar Grand Hotel are decorated with rich fabrics and ornate
        <br></br> furnishings. They are all equipped with satellite TV channels, air conditioning and a wardrobe.
        <br></br>A number of restaurants and shops are located within a walking distance from Emaar Grand Hotel. King Abdul Aziz Airport is 60 minutes by car.</p>
        
        {/* map */}
        
        <div className={h4style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14857.639357913764!2d39.81168241738281!3d21.413130099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204c9d065da63%3A0x247df1b272bbaf29!2sDar%20Aleiman%20Grand%20Hotel!5e0!3m2!1sen!2s!4v1713971505374!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h4style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h4style.icondiv}>
            <span className={h4style.iconss}><CiParking1 /> <span className={h4style.iconsstext}>Parking</span></span>
            <span className={h4style.iconss1}><MdFamilyRestroom /> <span className={h4style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h4style.icondiv}>
            <span className={h4style.iconss}><IoWifiSharp /> <span className={h4style.iconsstext}>Free WiFi </span> </span>
            <span className={h4style.iconss2}><RiRestaurantFill /> <span className={h4style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h4style.icondiv}>
            <span className={h4style.iconss}><FaSmokingBan /> <span className={h4style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h4style.iconss3}><MdRoomService /> <span className={h4style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h4style.icondiv}>
            <span className={h4style.iconss}><FaWheelchair /> <span className={h4style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h4style.iconss5}><FcBusinessman /> <span className={h4style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h4style.icondiv}>
            <span className={h4style.iconss}><GiLift /><span className={h4style.iconsstext}>Lift </span></span>
            <span className={h4style.iconss6}><MdOutlineFreeBreakfast /> <span className={h4style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>
            

            {/* //// */}
            <div className={h4style.disticond}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h4style.dist}> 1  m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h4style.dist1}> 3.9 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h4style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h4style.dist3}>6 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h4style.dist4}>8 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h4style.dist5}>9 km</span>
                
            </div>

         {/*  */}

         <div className={h4style.restu}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Cafe/bar.Cafeteria Retaaj </span>
                <span className={h4style.distt}>40 m</span>
                <br></br>
                <span>Restaurant.Cafè Vergnano </span>
                <span className={h4style.distt1}> 600 m</span>
                <br></br>
                <span>Cafe/bar.Tayyibah Restaurant   </span>
                <span className={h4style.distt2}>650 m</span>  
            </div>
            {/* //// */}
            
            <div className={h4style.restu1}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Jabal Thawr </span>
                <span className={h4style.disttt}> 4.9 Km</span>
                
            </div>

       {/*  */}

       <div className={h4style.restutrain}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h4style.disttrain}> 3.6 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h4style.distt1r}> 5  km</span>
                  
            </div>
        {/* //// */}

            <div className={h4style.restutairport}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h4style.distair}> 68 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h4style.distt1air}> 71 km</span>
                  
            </div>

            {/* slider */}

         <div>
            <H4Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}