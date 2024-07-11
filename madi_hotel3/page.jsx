"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h3style from "@/app/madinastyle/hotel3.module.css";
import  H3Slider from '@/app/madiimgcomponents/hotel3slider';
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
import Madheader3 from '@/app/medinacomponents/madheader3'


export default function madi_hotel3(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel3_regis");
    }
    return(
        <>
        <Madheader3/>
       
        <button className={h3style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h3style.headings}>Le Bosphorus Al Madinah</h1>
        <p className={h3style.text}>Attractively situated in the centre of Al Madinah, Le Bosphorus Al Madinah features continental breakfast and free WiFi throughout the property. The property is situated
        less than 1 km from Al-Masjid an-Nabawi, 5.3 km from Quba Mosque and 5.7 km from Qiblatain Mosque. The accommodation offers a shared lounge, room service and currency exchange for guests.
        <br></br>
        <br></br>The rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety 
        deposit box and a private bathroom with a shower, free toiletries and a hairdryer. The units will provide guests with a fridge.
        <br></br>
        <br></br>Mount Uhud is 8 km from Le Bosphorus Al Madinah, while Al Hukeer Lowna Park is 8.3 km from the property. 
        </p>
        
        <p className={h3style.text}>
        The nearest airport is Prince Mohammad bin Abdulaziz International Airport, 15 km from the hotel.
        </p>
   
        <p className={h3style.text}>Couples particularly like the location—they rated it <span className={h3style.textbold}>8.7</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        <div className={h3style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.515308298992!2d39.602119175187!3d24.467596078187782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf043045df11%3A0xe19ef34f9664cf02!2sHotel%20Bosphorus!5e0!3m2!1sen!2s!4v1715784954294!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* feature */}
         <div className={h3style.iconsset}>
            <h2 >Most Popular Facilities</h2>
            <div className={h3style.icondiv}>
            <span className={h3style.iconss}><CiParking1 /> <span className={h3style.iconsstext}>Parking</span></span>
            <span className={h3style.iconss1}><MdFamilyRestroom /> <span className={h3style.iconsstext}>Family Rooms</span></span>
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
            <span className={h3style.iconss}><GiLift /><span className={h3style.iconsstext}> Lift </span></span>
            <span className={h3style.iconss6}><MdOutlineFreeBreakfast /> <span className={h3style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h3style.disticond}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h3style.dist}> 4.5 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h3style.dist1}> 5 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h3style.dist2}> 7 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h3style.dist3}>8 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h3style.dist4}> 8 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h3style.dist5}>11 km</span>
                
            </div>

         {/*  */}

         <div className={h3style.restu}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Shiraz </span>
                <span className={h3style.distt}> 600 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h3style.distt1}> 600 m</span>
                <br></br>
                <span>Cafe/bar.Lider Cafe  </span>
                <span className={h3style.distt2}>650 m</span>  
            </div>
            {/* //// */}
            
            <div className={h3style.restu1}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h3style.disttt}> 5 Km</span>
                
            </div>

       {/*  */}

       <div className={h3style.restutrain}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h3style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h3style.distt1r}> 5 km</span>
                  
            </div>
        {/* //// */}

            <div className={h3style.restutairport}>
                <div className={h3style.disticon}>
                <span className={h3style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h3style.distair}> 11 km</span>
                <br></br>Abdulaziz International Airport </span>
    
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