"use client";
import makkahstyle from '@/app/styles/makkah.module.css'
import Footer from "../components/Footer";
import { GiPrayerBeads } from "react-icons/gi";
import { LiaMosqueSolid } from "react-icons/lia";
import { BiSolidShoppingBags } from "react-icons/bi";
import Link from "next/link";
import Weather from "../makimgcomponents/weather";
// import Hotelone from "../hotels/hotelone";
import MakHeader from '../components/Makheader';



export default function Makkah(){
    

    return(
        <>
  
      <MakHeader/>
      <Weather/>
      <nav className={makkahstyle.header2}>
      <Link href="#holysite" className={makkahstyle.bookmark}>
      <div className={makkahstyle.icon}>
      <span><GiPrayerBeads size={35} /></span>
      <br></br>
      <span className={makkahstyle.icontext} >Holy site</span>
     </div>
     </Link>
     <Link href="#grandmosque" className={makkahstyle.bookmark}>
     <div className={makkahstyle.icon1}>
      <span><LiaMosqueSolid size={35} /></span>
      <br></br>
      <span className={makkahstyle.icontext1}>The Grand Mosque</span>
     </div>
     </Link>
     <Link href="#shoppingmall" className={makkahstyle.bookmark}>
     <div className={makkahstyle.icon2}>
      <span><BiSolidShoppingBags size={35} /></span>
      <br></br>
      <span className={makkahstyle.icontext2}>Shopping Mall</span>
     </div>
     </Link>
     </nav>

     {/*  */}
     <div>
      <h1 className={makkahstyle.heading} id="holysite">Holy site</h1>
      <br></br>
     <div className={makkahstyle.section}>
     <p className={makkahstyle.text}>Makkah is the holiest city for Muslims. It embraces Masjid Al Haram (the GreatMosque) and Kaaba, the qiblah for Muslims to which they turn in their prayers. Muslims yearn to visit Makkah to perform Hajj or Umrah. In this city, Prophet Muhammad, the most honorable of creation, the seal of the prophets and messengers, our master Muhammad, peace be upon him, was born, and from it, the tolerant message of Islam was launched to all corners of the world after the Holy Quran was revealed. Makkah is located in the western part of Saudi Arabia. During the reign of the kings of Saudi Arabia, it received great interest. Makkah still enjoys great attentionto provide the best services to pilgrims. Its most prominent landmark, Masjid Al Haram, witnessed many expansions that included all parts of the mosque, and the holy sites received a series of development works to provide all means of comfort and reassurance for all pilgrims from inside and outside the Kingdom.</p>
     </div>
     </div>
     
      {/* holy sites */}
      <div className={makkahstyle.imggall}>
      <div className={makkahstyle.imggall1}>
        <img src="/mina.jpg" alt="Mina" className={makkahstyle.hs1img} />
        <span className={makkahstyle.text1}>MINA</span>
        <p className={makkahstyle.text1d}>
            Mina, a crucial stop in the Hajj journey, features expansive white tents and holds the title of the world's largest tent city according to the Guinness World Records. It provides essential services like transportation, accommodations, and catering. With historical landmarks like the well of Kadana and bustling seasonal markets, Mina is imbued with religious significance and serves as a hub for pilgrims during the Hajj pilgrimage.
        </p>
    </div>

    <div className={makkahstyle.imggall2}>
        <img src="/jamarat.jpg" alt="Jamarat" className={makkahstyle.hs1img} />
        <span className={makkahstyle.text2}>JAMARAT</span>
        <p className={makkahstyle.text1d}>
            The Jamarat Pillars in Mina Valley, now incorporated into the Jamarat Bridge, serve as a crucial site for pilgrims during Hajj. This bridge, a testament to the Kingdom's commitment to safety and organization, facilitates the ritual of throwing pebbles at the pillars. With its multi-floor structure and wide design, the bridge ensures smoother crowd movement and connects seamlessly with pilgrim camps, enhancing the overall pilgrimage experience.
        </p>
    </div>

    <div className={makkahstyle.imggall3}>
        <img src="/namirah.jpg" alt="Namirah Mosque" className={makkahstyle.hs1img} />
        <span className={makkahstyle.text3}>NAMIRAH MOSQUE</span>
        <p className={makkahstyle.text1d}>
            Namirah Mosque in Arafah holds historical significance as the site of Prophet Muhammad's farewell sermon during Hajj. Serving thousands of pilgrims for zuhr and asr prayers on Arafah Day, it underwent substantial expansions, making it the second-largest mosque in Makkah. With a capacity for 350 thousand worshippers, the mosque features six minarets and broadcasting facilities for Arafat day prayers and sermons.
        </p>
    </div>

    <div className={makkahstyle.imggall4}>
        <img src="/arafat.jpg" alt="Arafat" className={makkahstyle.hs1img} />
        <span className={makkahstyle.text4}>ARAFAH</span>
        <p className={makkahstyle.text1d}>
            Arafah, occurring on the ninth day of Dhu al-Hijjah, is a key pilgrimage stage where pilgrims stand in prayer and supplication. It's hailed as the Greatest Day of Hajj, marked by the joining and shortening of zuhr and asr prayers. Following tradition, a sermon is delivered, and pilgrims depart for Muzdalifah at sunset, making it the most esteemed day by Prophet Muhammad, peace and prayers be upon him.
        </p>
    </div>
</div>

      {/* <div className={makkahstyle.section}>
        <div className={makkahstyle.imggall}>
        <div className={makkahstyle.imggall1}>
              <img src="/mina.jpg" alt="Big Image" className={makkahstyle.hs1img} /> 
              <span className={makkahstyle.text1}> MINA </span>
              <p className={makkahstyle.text1d}>Mina, a crucial stop in the Hajj journey, features expansive white tents and holds the title of the world's largest tent city according to the Guinness World Records. It provides essential services like transportation, accommodations, and catering. With historical landmarks like the well of Kadana and bustling seasonal markets, Mina is imbued with religious 
              significance and serves as a hub for pilgrims during the Hajj pilgrimage.
            </p>  </div>

              <div className={makkahstyle.imggall2}> 
              <img src="/jamarat.jpg" alt="Big Image" className={makkahstyle.hs1img} />
              <span className={makkahstyle.text2} > JAMARAT </span>
              <p className={makkahstyle.text1d}> The Jamarat Pillars in Mina Valley, now incorporated into the Jamarat Bridge, serve as a crucial site for pilgrims during Hajj. This bridge, a testament to the Kingdom's commitment to safety and organization, facilitates the ritual of throwing pebbles at the pillars. With its multi-floor structure and wide design The bridge ensures smoother crowd movement and connects seamlessly with pilgrim camps, 
                enhancing the overall pilgrimage experience.</p>  </div>

              <div className={makkahstyle.imggall3}> 
              <img src="/namirah.jpg" alt="Big Image" className={makkahstyle.hs1img} />
              <span className={makkahstyle.text3}>  NAMIRAH MOSQUE </span>
              <p className={makkahstyle.text1d}> Namirah Mosque in Arafah holds historical significance as the site of Prophet Muhammad's farewell sermon during Hajj. Serving thousands of pilgrims for zuhr and asr prayers on Arafah Day, it underwent substantial expansions, making it the second-largest mosque in Makkah. With a capacity for 350 thousand worshippers, 
              the mosque feature six minarets and broadcasting facilities for Arafat day prayers and sermons.</p> </div>
              <div className={makkahstyle.imggall4}>
              <img src="/arafat.jpg" alt="Big Image" className={makkahstyle.hs1img} /> 
              <span className={makkahstyle.text4}> ARAFAH </span> 
              <p className={makkahstyle.text1d}>Arafah, occurring on the ninth day of Dhu al-Hijjah, is a key pilgrimage stage where pilgrims stand in prayer and supplication. It's hailed as the Greatest Day of Hajj, marked by the joining and shortening of zuhr and asr prayers. Following tradition, a sermon 
              <br></br>is delivered, and pilgrims depart for Muzdalifah at sunset, making it the most esteemed day by <br></br>Prophet Muhammad, 
              peace and prayers be upon him. </p> </div> 
       </div>
       </div> */}
       <br></br>
       <br></br>
       <br></br>
       <br></br>
     {/* Grand Mosque */}
     <h2 className={makkahstyle.grandM_heading} id="grandmosque">Makkah the Qiblah of Muslims</h2>
    <div className={makkahstyle.section1}>
    <div className={makkahstyle.texts}>
        <p>
            Makkah holds a special significance as Allah's chosen site for the rituals of Hajj, 
            where visiting it is an act of worship elevating one's spiritual ranks and expunging sins. 
            Prophet Muhammad (peace be upon him) emphasized its sanctity, stating, "By Allah, 
            you are the best part of Allah’s earth and the part dearest to Him." It's the site of the first House of 
            Prayer established for humanity, marked by Allah's blessings and guidance. Since the dawn of creation, Makkah has held a sacred status, with the Prophet affirming, "Allah made this town sacred on the day He created the heavens and the earth." Muslims worldwide turn to Makkah in prayer, strengthening their unity and devotion to Allah. 
            As the Qiblah, Makkah symbolizes guidance and grace, shaping the lives of believers. Gratitude for this blessing is essential, as Allah appointed the Kaaba as a support for humanity, 
            signifying His omniscience and benevolence.
        </p>
      </div>
    <div className={makkahstyle.image} style={{ backgroundImage: "url('/kaba.jpg')" }}></div>
</div>

     
 {/* shopping */}
 
 <div className={makkahstyle.shopingmal} id="shoppingmall">
 <div className={makkahstyle.shopingmal1}>
              <img src="/makmall.jpg" alt="Big Image" className={makkahstyle.s1img} /> 
              <span className={makkahstyle.stext1}>MAKKAH MALL </span>
              <p className={makkahstyle.text1d}>Makkah Mall is a special destination where you can enjoy yourself and have an amazing shopping day inside its two floors. You can find the most recent products of local and international brands for men and women, 
              as well as shops that allow women to shine with fancy jewelry and cosmetics.
            </p>  </div>

              <div className={makkahstyle.shopingmal2}> 
              <img src="/soukmall.jpg" alt="Big Image" className={makkahstyle.s1img} />
              <span className={makkahstyle.stext2} > SOUK AL-DIYAFA </span>
              <p className={makkahstyle.text1d}> Souk Al-Diyafa contains a multitude of retail stores, offering men's, women's, and children's clothing and is distinguished by the presence of both luxurious international and local brands, making it one of the best markets in Makkah. It features various restaurants with a wide range of cuisines to cater to different tastes, 
              allowing you to enjoy your preferred meals.</p>  </div>
 </div>
       

        <br></br>    
        <br></br> 
        <br></br> 
        <br></br> 
        <br></br> 
        

     <Footer/>

</>
    )
}