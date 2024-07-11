"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h6style from "@/app/madinastyle/hotel6.module.css";
import  H6Slider from '@/app/madiimgcomponents/hotel6slider';
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
import Madheader6 from '@/app/medinacomponents/madheader6'


export default function madi_hotel5(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel6_regis");
    }
    return(
        <>
        <Madheader6/>
       
        <button className={h6style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h6style.headings}>Pullman Zamzam Madina</h1>
        <p className={h6style.text}>Located in the holy city of Madinah Al Munawara and only 150 meters from Bab Al Salam of Al Masjid Al Nabawi, Pullman Zamzam Madina offers free WiFi throughout the entire hotel.
        <br></br>
        <br></br>
        All 835 rooms & suites are blended with modern Arabic & French elegance, All rooms are air-conditioned and feature free WiFi, a flat-screen TV and tea/coffee making facilities. Some rooms offer a seating area and sofa bed. The bathrooms are fitted with a shower.
        <br></br>
        <br></br>The property has 4 unique restaurants such as Acacia, which serves an all-day-dining International cusine for breakfast, lunch and dinner. Al Mandara features an a la carte menu and oriental specialties during lunch or dinner.
        <br></br>
        <br></br>Quba Mosque and Uhud Mountain are only 15-minutes away from the property. Indoor parking is available on site with additional charge
        <br></br>
        </p>
        
        <p className={h6style.text}>
        During the holy  month of Ramadan morning breakfast meal will be served as a Suhoor & Dinner meal will be served as a Iftar.
        </p>
   
        <p className={h6style.text}>Couples particularly like the location—they rated it <span className={h6style.textbold}>8.8</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        
        <div className={h6style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6050894617974!2d39.608800075186856!3d24.464482978189878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfa832eb7ab5%3A0xa5c713b21440d21e!2sPullman%20Zamzam%20Madina!5e0!3m2!1sen!2s!4v1715793591805!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h6style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><CiParking1 /> <span className={h6style.iconsstext}>Parking</span></span>
            <span className={h6style.iconss1}><MdFamilyRestroom /> <span className={h6style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><IoWifiSharp /> <span className={h6style.iconsstext}>Free WiFi </span> </span>
            <span className={h6style.iconss2}><RiRestaurantFill /> <span className={h6style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><FaSmokingBan /> <span className={h6style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h6style.iconss3}><MdRoomService /> <span className={h6style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><FaWheelchair /> <span className={h6style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h6style.iconss5}><FcBusinessman /> <span className={h6style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><GiLift /><span className={h6style.iconsstext}> Lift </span></span>
            <span className={h6style.iconss6}><MdOutlineFreeBreakfast /> <span className={h6style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h6style.disticond}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h6style.dist}> 4.4 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h6style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h6style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h6style.dist3}>7 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h6style.dist4}> 7 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h6style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h6style.restu}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Cafe/bar.Cafe/bar </span>
                <span className={h6style.distt}> 50 m</span>
                <br></br>
                <span>Restaurant.Al Baik </span>
                <span className={h6style.distt1}> 500 m</span>
                <br></br>
                <span>Cafe/bar.Starbucks   </span>
                <span className={h6style.distt2}>40 m</span>  
            </div>
            {/* //// */}
            
            <div className={h6style.restu1}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h6style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h6style.restutrain}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h6style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h6style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h6style.restutairport}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h6style.distair}> 11 km</span>
                <br></br>Abdulaziz International Airport </span>
    
            </div>

            {/* slider */}

         <div>
            <H6Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}