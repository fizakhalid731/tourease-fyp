"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h8style from "@/app/makkahstyles/hotel8.module.css";
import H8Slider from '@/app/makimgcomponents/h8slider';
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
import MakHeader8 from "@/app/makcomponents/makheader8";


export default function mak_hotel8(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel8_regis");
    }
    return(
        <>
         
        <MakHeader8/>
       
        <button className={h8style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h8style.headings}>Anjum Makkah Hotel</h1>
        <p className={h8style.text}>Located in Mecca, Anjum Hotel Makkah offers modern accomodations with views of the Masjid Al Haram.   
        <br></br>Free WiFi access is available throughout the entire property.
        <br></br>Each unit here will provide you with a flat-screen TV, air conditioning and a mini fridge. Bathrooms are fitted with a 
        <br></br>shower, a hairdryer and free toiletries.</p>
        
        <p className={h8style.text}>Guests can enjoy local and international menu options at the restaurant or in the room. Room service is available 24 hours.</p>
        
        <p className={h8style.text}>The hotel is a 5-minute walk from Masjid Al Haram and 74 km from King Abdulaziz International Airport.</p> 
       
        <p className={h8style.text}>Couples particularly like the location—they rated it <span className={h8style.textbold}>8.6</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}

        <div className={h8style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.113241813102!2d39.81712327509234!3d21.424793480325548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b47a578a4b%3A0x70a3d202df30a258!2sAnjum%20Hotel%20Makkah%E2%80%8F!5e0!3m2!1sen!2s!4v1714405193761!5m2!1sen!2s"
         width="400" 
         height="350" 
         style={{border:"0"}} 
         allowfullscreen="" 
         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h8style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><CiParking1 /> <span className={h8style.iconsstext}>Parking</span></span>
            <span className={h8style.iconss1}><MdFamilyRestroom /> <span className={h8style.iconsstext}>Family Rooms</span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><IoWifiSharp /> <span className={h8style.iconsstext}>Free WiFi </span> </span>
            <span className={h8style.iconss2}><RiRestaurantFill /> <span className={h8style.iconsstext}>Restaurant </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><FaSmokingBan /> <span className={h8style.iconsstext}>Non-smoking rooms </span></span>
            <span className={h8style.iconss3}><MdRoomService /> <span className={h8style.iconsstext}>Room service </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><FaWheelchair /> <span className={h8style.iconsstext}>Facilities for disabled guests </span></span>
            <span className={h8style.iconss5}><FcBusinessman /> <span className={h8style.iconsstext}>24-hour front desk </span></span>
            </div>
            <br></br>
            <div className={h8style.icondiv}>
            <span className={h8style.iconss}><GiLift /><span className={h8style.iconsstext}>Lift </span></span>
            <span className={h8style.iconss6}><MdOutlineFreeBreakfast /> <span className={h8style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h8style.disticond}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h8style.dist}> 700 m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h8style.dist1}> 2.7 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h8style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h8style.dist3}>7 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h8style.dist4}>9 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h8style.dist5}>10 km</span>
                
            </div>

         {/*  */}

         <div className={h8style.restu}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>Cafe/bar.Mamma Bunz Cafe</span>
                <span className={h8style.distt}>250 m</span>
                <br></br>
                <span>Restaurant.Al Baik </span>
                <span className={h8style.distt1}>400 m</span>
                <br></br>
                <span>Cafe/barAshoor Cafe  </span>
                <span className={h8style.distt2}>400 m</span>  
            </div>
            {/* //// */}
            
            <div className={h8style.restu1}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Al Noor Mount </span>
                <span className={h8style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h8style.restutrain}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h8style.disttrain}>3.4 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h8style.distt1r}> 5 km</span>
                  
            </div>
        {/* //// */}

            <div className={h8style.restutairport}>
                <div className={h8style.disticon}>
                <span className={h8style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h8style.distair}> 67 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h8style.distt1air}> 71 km</span>
                  
            </div>

            {/* slider */}

         <div>
            <H8Slider/>
         </div>

         <br></br>
         <br></br>
         </div>

         <Footer/>
        
        </>
    )

}