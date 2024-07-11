"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h6style from "@/app/makkahstyles/hotel6.module.css";
import H6Slider from '@/app/makimgcomponents/h6slider';
import { CiParking1 } from "react-icons/ci";
import { IoWifiSharp } from "react-icons/io5";
import { RiRestaurantFill } from "react-icons/ri";
import { IoIosFitness } from "react-icons/io";
import { FaSmokingBan } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { FaSpa } from "react-icons/fa";
import { IoWalkSharp } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
import { LuTrain } from "react-icons/lu";
import { CiPlane } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { useRouter } from "next/navigation";
import MakHeader6 from "@/app/makcomponents/makheader6";


export default function mak_hotel2(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel6_regis");
    }
    return(
        <>
        
        <MakHeader6/>
       
        <button className={h6style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h6style.headings}>Makkah Clock Royal Tower, A Fairmont Hotel</h1>
        <p className={h6style.text}>Situated only 100 meters from Masjid al-Haram, this 76 storey luxury hotel is one of the tallest buildings in the world and is inside Makkah Clock Tower.  
        <br></br>and is inside Makkah Clock Tower. It offers a fully equipped fitness centre, hot tub, sauna and a steam room.
        <br></br>It includes a 24-hour concierge services.
        <br></br>Every unit at the Fairmont Makkah Clock Royal Tower features an LCD TV and a spacious en-suite bathroom with a 
        bathtub. The rooms also benefit from views of the Holy Ka'aba, the Haram or the Holy City.</p>
        <p className={h6style.text}>Couples particularly like the location—they rated it <span className={h6style.textbold}>8.9</span> for a two-person 
        <br></br>trip.</p>
        
        {/* map */}
        
        <div className={h6style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2851661496447!2d39.822994575092046!3d21.41803348033051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b7eaf25137%3A0x8308e71b2bf1706a!2sMakkah%20Clock%20Royal%20Tower%20A%20Fairmont%20Hotel!5e0!3m2!1sen!2s!4v1714035850239!5m2!1sen!2s" 
         width="400" 
         height="350" 
        style={{border:"0"}} 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h6style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h6style.icondiv}>
            <span className={h6style.iconss}><CiParking1 /> <span className={h6style.iconsstext}>Parking</span></span>
            <span className={h6style.iconss1}><TbAirConditioning /> <span className={h6style.iconsstext}>Air conditioning</span></span>
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
            <span className={h6style.iconss}><IoIosFitness /><span className={h6style.iconsstext}> Fitness centre </span></span>
            <span className={h6style.iconss6}><FaSpa /> <span className={h6style.iconsstext}> Spa and wellness centre</span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h6style.disticond}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h6style.dist}> 250  m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h6style.dist1}> 3.4 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h6style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h6style.dist3}>6 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h6style.dist4}>8 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h6style.dist5}>10 km</span>
                
            </div>

         {/*  */}

         <div className={h6style.restu}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.Al Shorfa </span>
                <span className={h6style.distt}>20 m</span>
                <br></br>
                <span>Restaurant.Mazaq </span>
                <span className={h6style.distt1}>20 m</span>
                <br></br>
                <span>Restaurant.Aja Restaurant </span>
                <span className={h6style.distt2}>20 m</span>  
            </div>
            {/* //// */}
            
            <div className={h6style.restu1}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Jabal Thawr </span>
                <span className={h6style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h6style.restutrain}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h6style.disttrain}> 4 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h6style.distt1r}> 4.7 km</span>
                  
            </div>
        {/* //// */}

            <div className={h6style.restutairport}>
                <div className={h6style.disticon}>
                <span className={h6style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h6style.distair}> 68 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h6style.distt1air}> 71 km</span>
                  
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