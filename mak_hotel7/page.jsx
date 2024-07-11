"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h7style from "@/app/makkahstyles/hotel7.module.css";
import H7Slider from '@/app/makimgcomponents/h7slider';
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
import MakHeader7 from "@/app/makcomponents/makheader7";


export default function mak_hotel7(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/makhotel7_regis");
    }
    return(
        <>
        <MakHeader7/>
       
        <button className={h7style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h7style.headings}>Al Safwah Royale Orchid Hotel</h1>
        <p className={h7style.text}>Facing Mecca’s King Abdulaziz Gate, Al Safwah offers modern accommodation in a high rise, located at Al Haram Al Makky Yard.  
        <br></br>It features free Wi-Fi access.
        <br></br>Fitted with contemporary furnishings, rooms at Al Safwah Royale Orchid Hotel are equipped with flat-screen satellite 
        <br></br>TVs. They are all air conditioned and include en-suite bathrooms with selected toiletries.</p>
        
        <p className={h7style.text}>Guests will enjoy a menu of traditional Saudi specialities and international classic dishes at the restaurant of the hotel.
        <br></br>To order food and drinks via room service is also possible.
</p>
        
        <p className={h7style.text}>Other facilities of the Royale Orchid Hotel include an on-site business centre and 24-hour reception staff. Laundry services are available.</p> 
       
        <p className={h7style.text}>Couples particularly like the location—they rated it <span className={h7style.textbold}>9.0</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
       
        <div className={h7style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2431054164795!2d39.82398757509238!3d21.419687480329273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b783323ce7%3A0xd5a307ee52153051!2sAl%20Safwah%20Royale%20Orchid!5e0!3m2!1sen!2s!4v1714036009891!5m2!1sen!2s" 
         width="400" 
         height="350" 
         style={{border:"0"}} 
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            <span className={h7style.iconss}><GiLift /><span className={h7style.iconsstext}>Lift </span></span>
            <span className={h7style.iconss6}><MdOutlineFreeBreakfast /> <span className={h7style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h7style.disticond}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Zamzam Well </span>
                <span className={h7style.dist}> 250 m</span>
                <br></br>
                <span>Makkah Museum </span>
                <span className={h7style.dist1}> 3.5 km</span>
                <br></br>
                <span>Mecca Gate  </span>
                <span className={h7style.dist2}>17 km</span>
                <br></br>
                <span>Public Park and Playground </span>
                <span className={h7style.dist3}>6 km</span>
                <br></br>
                <span>Assalamu Alaika Ayyuha Annabi </span>
                <span className={h7style.dist4}>8 km</span>
                <br></br>
                <span>Al Ma'ali Garden Park  </span>
                <span className={h7style.dist5}>9 km</span>
                
            </div>

         {/*  */}

         <div className={h7style.restu}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Felda D'Saji </span>
                <span className={h7style.distt}> 9 m</span>
                <br></br>
                <span>Restaurant.Smash Burger </span>
                <span className={h7style.distt1}> 9 m</span>
                <br></br>
                <span>Restaurant.The Grill  </span>
                <span className={h7style.distt2}>20 m</span>  
            </div>
            {/* //// */}
            
            <div className={h7style.restu1}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Jabal Thawr </span>
                <span className={h7style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h7style.restutrain}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>TrainMakkah.Haramain High Speed <span className={h7style.disttrain}>4.1 km</span>
                <br></br>Railway Station </span>
                <br></br>
                <span>TrainStation.Jamarat (Mina 3) </span>
                <span className={h7style.distt1r}> 4.6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h7style.restutairport}>
                <div className={h7style.disticon}>
                <span className={h7style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>King Abdulaziz International Airport </span>
                <span className={h7style.distair}> 68 km</span>
                <br></br>
                <br></br>
                <span>Ta'if Regional Airport </span>
                <span className={h7style.distt1air}> 70 km</span>
                  
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