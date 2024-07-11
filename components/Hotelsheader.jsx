"use client";
import Link from "next/link";
import { useState } from "react";
import { useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import styless from '@/app/styles/hotelsheader.module.css'


export default function HotelsHeader(){

  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
      setNavOpen(!navOpen);
  };
  const backgroundImageRef = useRef(null);

  useEffect(() => {
    const imageElement = backgroundImageRef.current;
    let zoomIn = true;

    const animateZoom = () => {
      if (zoomIn) {
        imageElement.style.transform = 'scale(1.1)';
      } else {
        imageElement.style.transform = 'scale(1)';
      }
      zoomIn = !zoomIn;
    };

    const interval = setInterval(animateZoom, 4000); // 2 seconds for each zoom in/out

    return () => clearInterval(interval);
  }, []);


return(
  <>
  <div className={styless.zoomContainer}>
  <div className={styless.bagroundimage} ref={backgroundImageRef}></div>

      <header className={styless.header}>
                     {/* < nav bar 1 >  */}
            <div className={styless.bar1}>
             <div className={styless.left}>
             <span ><FaPhoneAlt/>+92857868534</span>
             <span className={styless.icon}><FaEnvelope/> Toureasejourneys@gmail.com</span>
             </div>
              <div className={styless.right}>
                <Link href='/register' className={styless.links}>
                  <span >Registeration</span> 
                 </Link>
                 <span className={styless.logtext} >OR</span>
                <Link href='/loginform' className={styless.links}>
                <span >
                Login
                </span>   
                 </Link>
                
               </div> 
            
        {/* nav bar 2 */}
         <nav className={styless.bar2}>
         <div className={styless.burger} onClick={handleToggle}>
                <div className={styless.butttoggle}>
                <div className={styless.togbutt}></div>
                <div className={styless.togbutt}></div>
                <div className={styless.togbutt}></div>
                </div>
            </div>

           <div className={styless.nav2left}>
           <span>TourEase</span>
           </div>
           <div className={styless.navpages} style={{ display:  navOpen ? 'flex' : ''  }}>

           <a href="#" className={styless.closebtn} onClick={handleToggle}>&times;</a>
             <ul className={styless.linkpages}>
             <Link className={styless.pagelinkss} href='/' >About  </Link> 
             <Link className={styless.pagelinkss} href='/makkah'>Makkah </Link>
             <Link className={styless.pagelinkss} href='/madina'>Madina  </Link>
             <Link className={styless.pagelinkss} href='/ziyarah'> Pilgrim's Guide </Link>
             <Link className={styless.pagelinkss} href='/flights'>Airline </Link>
             <Link className={styless.pagelinkss} href='/tranports'>Transport </Link>
             <Link className={styless.pagelinkss} href='/standardpack'>Package Info </Link>
             <Link className={styless.pagelinkss} href='/package'>Sacred Stays  </Link>
             </ul>
           </div>

         </nav>
         </div> 
        </header>
      
  </div>      
  </>
)
}