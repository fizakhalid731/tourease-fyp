"use client";
import Footer from "../components/Footer";
import madinastyle from '@/app/styles/madina.module.css';
import { GiPrayerBeads } from "react-icons/gi";
import { LiaMosqueSolid } from "react-icons/lia";
import { BiSolidShoppingBags } from "react-icons/bi";
import Link from "next/link";
import Weather from "../medinacomponents/weather";
import MadHeader from "../components/Madheader";

export default function Madina(){
    
    return(
        <>
      <MadHeader/>
      <Weather/>
      <nav className={madinastyle.header2}>
      <Link href="#holysite" className={madinastyle.bookmark}>
      <div className={madinastyle.icon}>
      <span><GiPrayerBeads size={35} /></span>
      <br></br>
      <span className={madinastyle.icontext} >Holy site</span>
     </div>
     </Link>
     <Link href="#grandmosque" className={madinastyle.bookmark}>
     <div className={madinastyle.icon1}>
      <span><LiaMosqueSolid size={35} /></span>
      <br></br>
      <span className={madinastyle.icontext1}>The Grand Mosque</span>
     </div>
     </Link>
     <Link href="#shoppingmall" className={madinastyle.bookmark}>
     <div className={madinastyle.icon2}>
      <span><BiSolidShoppingBags size={35} /></span>
      <br></br>
      <span className={madinastyle.icontext2}>Shopping Mall</span>
     </div>
     </Link>
     </nav>

     {/*  */}
     <div>
      <h1 className={madinastyle.heading} id="holysite">Al Madinah Al Munawara</h1>
      <div className={madinastyle.section}>
     <p className={madinastyle.text}>
     Medina, known to Muslims as "Taibah al Taibah," stands as a pivotal destination for millions of Muslims globally. Serving as the inaugural capital of Islam, it holds second place in holiness after Mecca al-Mukarramah. Situated in the Hejaz Region of western Saudi Arabia, Medina boasts the Noble Prophet’s Mosque, constructed by the Prophet himself in the year following the Hijrah (622 AD). Ranking among the world's largest mosques, it draws millions of Muslim visitors annually.
     </p>
     </div>
     </div>
     
      {/* holy sites */}
        <div className={madinastyle.imggall}>
        <div className={madinastyle.imggall1}>
              <img src="/JANNATAL_BAQI.jpg" alt="Big Image" className={madinastyle.hs1img} /> 
              <span className={madinastyle.text1}> JANNAT AL-BAQI </span>
              <p className={madinastyle.text1d}>Jannat al-Baqi, also recognized as Baqi’ al-Gharqad, is located in Medina, Saudi Arabia, revered by Muslims globally as a profoundly sacred site in Islam. 
              Established by Prophet Muhammad (PBUH), the cemetery has served as a place of burial since its inception. Today, Muslims continue to visit this revered location in Medina for reflection and pilgrimage, undertaking ziyarat to honor and pay respects.
              </p>  </div>

              <div className={madinastyle.imggall2}> 
              <img src="/quba.jpg" alt="Big Image" className={madinastyle.hs1img} />
              <span className={madinastyle.text2} > QUBA MOSQUE </span>
              <p className={madinastyle.text1d}>The Quba Mosque in Medina, Saudi Arabia, is the first mosque in Islam's history, drawing countless pilgrims for ziyarat each year. Originally modest, it evolved over centuries into a modern complex visited by thousands for prayer and reflection. 
              As a symbol of Islam's early days, it remains a pivotal pilgrimage site.</p>  </div>

              <div className={madinastyle.imggall3}> 
              <img src="/uhud.jpg" alt="Big Image" className={madinastyle.hs1img} />
              <span className={madinastyle.text3}>  UHUD MOUNTAIN </span>
              <p className={madinastyle.text1d}> Uhud Mountain, situated in Medina, Saudi Arabia, witnessed a significant battle in Islamic history resulting in a Muslim defeat. Presently, it is revered as a pilgrimage site where Muslims visit for ziyarat in Madina, honoring the sacrifices of fallen soldiers. 
              The surrounding area features monuments and graves linked to the historic battle.</p> </div>
              <div className={madinastyle.imggall4}>
              <img src="/MasjidQiblatain.jpg" alt="Big Image" className={madinastyle.hs1img} /> 
              <span className={madinastyle.text4}> MASJID AL-QIBLATAIN </span> 
              <p className={madinastyle.text1d}>Masjid al-Qiblatain in Madina, Saudi Arabia, holds historical significance as the only mosque with two qibla walls, facing both Jerusalem and Makkah. Built during the time of Prophet Muhammad (PBUH), it marks the transition in the direction of prayer. A notable destination for ziyarat in Madina, 
              it attracts Muslims worldwide for its unique architectural and religious importance. </p> </div> 
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
     {/* Grand Mosque */}
     <h2 className={madinastyle.grandM_heading} id="grandmosque">Prophet's Mosque</h2>
     <div className={madinastyle.section1}>
    <div className={madinastyle.texts}>
    <p>
    The construction of the Prophet’s Mosque dates back to the time of the Prophet himself, along with his esteemed companions. Subsequent Muslim rulers undertook expansions and maintenance of the mosque.The mosque includes:
    <br></br><span className={madinastyle.textbold}>The Old Mosque:</span> Where the Prophet prayed, now adorned with domes bearing Quranic verses and golden-crowned pillars.
    <br></br><span className={madinastyle.textbold}>Gravel-covered areas: </span> Two open spaces adjacent to the old mosque, previously surfaced with gravel.
    <br></br><span className={madinastyle.textbold}>The Honorable Rawdah:</span> Part of the Prophet’s Mosque, stretching from his residence (the honorable burial chamber) to his pulpit.
    <br></br><span className={madinastyle.textbold}>Expansions:</span> Several expansions overseen by Saudi Arabian monarchs, encompassing additional mosque structures around the gravel-covered areas.
    <br></br><span className={madinastyle.textbold}>Women's Prayer Halls: </span> Two large prayer areas designated for women, situated in the western and northern sections.
    <br></br><span className={madinastyle.textbold}>Outer Courtyards:</span> Outer Courtyards: Expansive prayer spaces covered with canopies to shield worshipers from the sun.
    </p>
      </div>
    <div className={madinastyle.image} style={{ backgroundImage: "url('/mmasj.jpeg')" }}></div>

    </div>
 {/* shopping */}
 
 <div className={madinastyle.shopingmal} id="shoppingmall">
 <div className={madinastyle.shopingmal1}>
              <img src="/aliatmall.jpg" alt="Big Image" className={madinastyle.s1img} /> 
              <span className={madinastyle.stext1}>ALIAT MALL - KINAN </span>
              <p className={madinastyle.text1d}>Aliat Mall is a destination for lovers of the world of fashion and beauty. Women's and men's stores of luxury brands, discount stores, modern furniture stores, and international and oriental perfume stores spread over an area of ​​92,000 square meters. 
              The mall is distinguished by its proximity to the Prophet's Mosque.
            </p>  </div>

              <div className={madinastyle.shopingmal2}> 
              <img src="/nourmall.jpg" alt="Big Image" className={madinastyle.s1img} />
              <span className={madinastyle.stext2} > AL NOOR MALL </span>
              <p className={madinastyle.text1d}> From fancy clothes to international perfumes, men’s and women’s jewellery, handbags and shoes, Al Noor Mall is an inclusive shopping destination that meets the needs of all individuals and families.  International and local brands fill the spatial corridors of the mall, attracting visitors to spend the best of times among the shelves of unique assets, 
              with continuous weekly offers and discounts.</p>  </div>
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