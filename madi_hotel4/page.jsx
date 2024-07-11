"use client";

import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import h4style from "@/app/madinastyle/hotel4.module.css";
import  H4Slider from '@/app/madiimgcomponents/hotel4slider';
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
import Madheader4 from '@/app/medinacomponents/madheader4'

export default function madi_hotel4(){
    const router = useRouter();
    const pageopen = async (e)=>{
        e.preventDefault();
        router.replace("/madihotel4_regis");
    }
    return(
        <>
    
        <Madheader4/>
       
        <button className={h4style.bookingbutton} onClick={pageopen}>Book Now</button>
        <h1 className={h4style.headings}>Saja Al Madinah</h1>
        <p className={h4style.text}>Saja Al Madinah is set in Al Madinah, 4 minute walking to The Prophet's Mosque.
        <br></br>Each room at this hotel is air conditioned and is equipped with a flat-screen TV with satellite channels. Certain rooms feature a seating area to relax in after a busy day. Some units include views of the mountain or city. Every room has a private bathroom fitted with a shower. Extras include free toiletries and a hairdryer.

        <br></br>
        <br></br>The rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety 
        deposit box and a private bathroom with a shower, free toiletries and a hairdryer. The units will provide guests with a fridge.
        <br></br>
        <br></br>Saja AL Madinah has Family Rooms with 5 beds and each Bed has it's own private safe.
        </p>
        
        <p className={h4style.text}>
        Saja Al Madinah features free WiFi . You will find a 24-hour front desk at the property. Old Bazaar is 400 metres from 
        Saja Al Madinah, while Al Baqia Cemetry is 1.1 km from the property. The nearest airport is Prince Mohammed Airport, 13 km from the property
        </p>
   
        <p className={h4style.text}>Couples particularly like the location—they rated it <span className={h4style.textbold}>8.3</span> for a two-person 
        <br></br>trip.</p>

        {/* map */}
        <div className={h4style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.515308298992!2d39.602119175187!3d24.467596078187782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf043045df11%3A0xe19ef34f9664cf02!2sHotel%20Bosphorus!5e0!3m2!1sen!2s!4v1715784954294!5m2!1sen!2s" 
        width="400" 
        height="350" 
        style={{border:"0"}}
        allowfullscreen="" 
        loading="lazy"
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
            <span className={h4style.iconss}><GiLift /><span className={h4style.iconsstext}> Lift </span></span>
            <span className={h4style.iconss6}><MdOutlineFreeBreakfast /> <span className={h4style.iconsstext}> Breakfast </span></span>
            </div>
            <br></br>

            {/* //// */}
            <div className={h4style.disticond}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><IoWalkSharp /> What's nearby</span>
                </div>
                <span>Jabal Ahad Garden Park </span>
                <span className={h4style.dist}> 3.6 km</span>
                <br></br>
                <span>King Fahad Garden </span>
                <span className={h4style.dist1}> 6 km</span>
                <br></br>
                <span>Knowledge Economic City </span>
                <span className={h4style.dist2}> 6 km</span>
                <br></br>
                <span>Dar Al Madinah Museum </span>
                <span className={h4style.dist3}>8 km</span>
                <br></br>
                <span>Al Madina Urban and Built<span className={h4style.dist4}> 8 km</span>
                <br></br> Heritage Musuem </span>
                <br></br>
                <span>Al Qadi Garden Park  </span>
                <span className={h4style.dist5}>12 km</span>
                
            </div>

         {/*  */}

         <div className={h4style.restu}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><RiRestaurantFill /> Restaurants & cafes</span>
                </div>
                <span>RestaurantAl.Shiraz </span>
                <span className={h4style.distt}> 250 m</span>
                <br></br>
                <span>Restaurant.Al Salam </span>
                <span className={h4style.distt1}> 250 m</span>
                <br></br>
                <span>Restaurant.Grazie  </span>
                <span className={h4style.distt2}>200 m</span>  
            </div>
            {/* //// */}
            
            <div className={h4style.restu1}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><PiMountains /> Natural beauty</span>
                </div>
                <br></br>
                <span>Mountain.Cave of Uhud </span>
                <span className={h4style.disttt}> 4.3 Km</span>
                
            </div>

       {/*  */}

       <div className={h4style.restutrain}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><LuTrain /> Public transport</span>
                </div>
                <span>Train.Al Haramain Train Station 
                    <span className={h4style.disttrain}> 9 km</span>
                <br></br>Madinah </span>
                <br></br>
                <span>Hejaj Al Bar Train Station </span>
                <span className={h4style.distt1r}> 6 km</span>
                  
            </div>
        {/* //// */}

            <div className={h4style.restutairport}>
                <div className={h4style.disticon}>
                <span className={h4style.textbold} ><CiPlane /> Closest airports</span>
                </div>
                <span>Prince Mohammad bin  
                    <span className={h4style.distair}> 10 km</span>
                <br></br>Abdulaziz International Airport </span>
    
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