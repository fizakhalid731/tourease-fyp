"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h5style from "@/app/makkahstyles/hotel5.module.css";
import H5Slider from '@/app/makimgcomponents/h5slider';
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
import MakHeader5 from "@/app/makcomponents/makheader5";


export default function mak_hotel5(){
    const router = useRouter();
    
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel5_regis");
    }
    return(
        <>
        
        <MakHeader5/>
       
        <button className={h5style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h5style.headings}>Elaf Al Mashaer Hotel Makkah</h1>
        <p className={h5style.text}>Elaf Al Mashaer offers non-smoking rooms with free Wi-Fi and fresh pastries in its lobby lounge. Located on Ajyad 
        <br></br>Road, the hotel is just over 400 metres from the Al-Masjid al-Ḥarām.
        <br></br> All air-conditioned rooms are decorated in soft, neutral colours and feature an armchair and work desk in the living 
        <br></br>area. Each room has a flat-screen TV, a tea / coffee maker and well-stocked minibar.</p>
        
        <p className={h5style.text}>Regional dishes such as Arabic bread, spicy stews and international cuisine are served in Al Multazim restaurant. Al 
        <br></br>Maqam Coffee Shop overlooks Ajyad Street and is open for breakfast, lunch and dinner.
</p>
        
        <p className={h5style.text}>Hotel Elaf Al Mashaer is 90 km from Jeddah international Airport. Al Jamrah al Wusţá is a 5-minute drive away.</p> 
       
        <p className={h5style.text}>Couples particularly like the location—they rated it <span className={h5style.textbold}>8.6</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
       

        <div className={h5style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.3231097005264!2d39.82559087509205!3d21.41654128033156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205870983b3b1%3A0xd4891108dd240999!2sHotel%20Elaf%20Al%20Mashaer!5e0!3m2!1sen!2s!4v1714032780005!5m2!1sen!2s" 
         width="400" 
         height="350" 
         style={{border:"0"}} 
        allowfullscreen="" loading="lazy" 
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
            <span className={h5style.iconss}><GiLift /><span className={h5style.iconsstext}>Lift </span></span>
            <span className={h5style.iconss6}><MdOutlineFreeBreakfast /> <span className={h5style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h5style.disticond}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h5style.dist}> 600 m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h5style.dist1}> 3.9 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h5style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h5style.dist3}>6 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h5style.dist4}>7 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h5style.dist5}>9 km</span>
                
            </div>

         {/*  */}

         <div className={h5style.restu}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Restaurant.Ajwaa Restaurant </span>
                <span className={h5style.distt}>200 m</span>
                <br></br>
                <span>Restaurant.Al Ruwad </span>
                <span className={h5style.distt1}>250 m</span>
                <br></br>
                <span>RestaurantAja.The Grill  </span>
                <span className={h5style.distt2}>350 m</span>  
            </div>
            {/* //// */}
            
            <div className={h5style.restu1}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.JabalThawr </span>
                <span className={h5style.disttt}> 4.9 Km</span>
                
            </div>

       {/*  */}

       <div className={h5style.restutrain}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h5style.disttrain}> 4.2 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h5style.distt1r}> 4.4 km</span>
                  
            </div>
        {/* //// */}

            <div className={h5style.restutairport}>
                <div className={h5style.disticon}>
                <span className={h5style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h5style.distair}> 68 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h5style.distt1air}> 70 km</span>
                  
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