"use client";

import Footer from "../components/Footer";
import umrahinfo from '@/app/styles/umrahinfo.module.css';
import ZiyarahHeader from "../components/Ziyarahheader";

export default function ziyarah(){
    
    const audioSrc = '/Labbaik_allahuma.mp3';
    const handleDownload = async (e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = audioSrc;
      link.download = 'audioSrc.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return(
        <>
        
      <ZiyarahHeader/>

       <div>
       <h1  className={umrahinfo.heading}>Step by Step Guide to Performing an Umrah</h1>
        <div className={umrahinfo.umrah1}>
            <div>
                <h2>Ihram</h2>
                <p>Ihram is essentially making the formal ‘intention’ of performing the Umrah. In order to enter the fold of Ihram, the individual must change clothes and take a proper bath.
                Men change into the two fabrics, Ridaa and Izaar, whereas women can wear any form of clothing which covers the body and head.
                <br></br>
                Upon the cleansing, the individual should perform the obligatory prayers or offer two rakaat of Sunnah prayer. Once that is done, the individual should face the direction of the Qibla and officially enter Ihram – the individual must enter Ihram before he/she leaves for the Meeqat in Makkah. 
                Perfume or perfumed products are strictly prohibited while a person is in his/her Ihram.
                </p>
                <p className={umrahinfo.umrah1res}>At the Meeqat, the pilgrim must make the intention and recite the words:
                    <br></br>
                    <span className={umrahinfo.textbold}> ❁لَبَّيْكَ اَللَّهُمَّ عُمْرَةً 
                 <br></br>
                    O Allah, here I am to perform Umrah.</span>
                </p>
                <p className={umrahinfo.umrah1res}>After this, he/she should recite the Talbiyah, in line with the Sunnah:
                    <br></br>
                    <span className={umrahinfo.textbold}>
                    ❁ – لَبَّيْكَ اَللَّهُمَّ لَبَّيْكَ – لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ – إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ – لَا شَرِيكَ لَكَ 
                    </span>
                    <br></br>
                    <span>At Your service, Allah, at Your service. At Your service, You have no partner, at Your service. Truly all praise, favour and sovereignty are Yours. 
                        You have no partner.</span> 
                </p>
                <div className={umrahinfo.audioo}>
                <audio controls >
                <source src={audioSrc} type="audio/mpeg" />
                 Your browser does not support the audio element.
                 <button onClick={handleDownload}></button>
                </audio>
                 </div>
            </div>
        </div>
        <div className={umrahinfo.image}>
       </div>
        {/* tawaaf */}
        
            <div className={umrahinfo.umrah2}>
                <h2> Tawaaf</h2>
                <p>The pilgrim can then touch the Black Stone (Hajr e Aswad) and start the Tawaaf. Ideally, the pilgrim should touch it with his right hand and then kiss it. If, however, he/she is unable to kiss it directly, he/she can touch it with his/her hand then kiss his/her hand. There is great virtue in touching the Black Stone. If he/she cannot even touch the stone with his/her hand, the pilgrim should face his/her hand in the direction of the stone and say “Allahu Akbar”. 
                    Then the pilgrim starts the Tawaaf. Taking rounds around the Ka’bah, with the Ka’bah being on their left.
                <br></br>
                Upon finishing the seven rounds of Tawaaf, the pilgrim must then go to the station of Ibrahim (Maqaam e Ibrahim).
                The pilgrim should then offer two rakaat of prayer behind Maqaam e Ibrahim.  
                </p>
                <p className={umrahinfo.umrah1res}>At the Meeqat, the pilgrim must make the intention and recite the words:
                    <br></br>
                    <span className={umrahinfo.textbold}> ❁ بِسْمِ اللهِ ❁ اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ❁ اللّٰهُمَّ اغْفِرْ لِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ 
                 <br></br>
                 In the name of Allah, send prayers upon Muhammad ﷺ. O Allah, forgive me and open for me the doors of Your Mercy.
                 </span>
                </p>
            </div>
            <div className={umrahinfo.image1}>
        </div>
{/* sai */}
            <div className={umrahinfo.umrah3}>
                <h2>Saa'i between Safa and Marwah</h2>
                <p className={umrahinfo.umrah1res}>The pilgrim must then climb up on the Safa hill to a point from where the Ka’bah is visible. He/she should face the Ka’bah, raise his/her hand and supplicate to Allah (SWT). 
                    The pilgrim is free to make whatever dua he/she desires.
                <br></br>
                The pilgrim should repeat this 3 times; do dhikr, supplicate, do dhikr, supplicate (and so on). Then the pilgrim should descend down to Marwah and the men are to run between the green lights. 
                </p>
                </div>

{/* Cutting of Hair */}

             <div className={umrahinfo.umrah4}>
                <h2>Halq or Taqsir</h2>
                <p className={umrahinfo.umrah1res}>After Sa’i, you must have your hair shaved (Halq) or trimmed by at least an inch (Taqsir) in order to leave the state of Ihram and complete your Umrah. It is more virtuous for a man to have his head shaved completely.
                <br></br>
                you may shave or trim your own hair in order to come out of the state of Ihram. 
                </p>
                </div>
</div>

{/* hajj */}
       <h1 className={umrahinfo.headinghaj}>Step by Step Guide to Performing an Hajj</h1>
              <div className={umrahinfo.umrah5}>
                <p>In Islam, as we work with a lunar calendar (as opposed to the Gregorian calendar), the specific dates for Hajj vary each year. Within the Islamic calendar, Hajj is performed between 8th to 12th of Dhul Hijjah – 
                    the last month of the Islamic year.
                <br></br>
                There are three forms of Hajj: Tamattu, Ifraad and Qiran. For the purpose of this Hajj guide, we will use the Tamattu form of Hajj, which is what the Prophet Muhammad (SAW) encouraged his followers to perform.
                <br></br>
                Before you arrive at Makkah to start Hajj, it’s important to make your intention (niyah) within your heart. 
                <br></br>
                <p className={umrahinfo.umrah1res}>
                Next, you’ll enter into the state of ihram (ritual purity). For men, this means wearing the designated white cloth with one piece wrapped around your shoulder and one around your waist. Ladies can wear any clothing of their choice but should ensure they observe the rules of hijab. Face coverings, however, are not permitted. Fully-covering shoes are also not permitted. Footwear must be in the form of sandals for both men and women.
                </p>
                </p>
                </div>
                <div className={umrahinfo.image2}>
        </div>
{/* //// */}
                <div className={umrahinfo.umrah6}>
                <h2>Day 1: 8th Dhul Hijjah</h2>
                <p className={umrahinfo.umrah1res}>The 8th day of Dhul Hijjah marks the beginning of the days of Hajj and the next stage of your spiritual journey. You’ll purify yourself and enter the state of ihram once again.
                <br></br>
                It’s very important to note that you are in a state of ihram and you are not permitted to smoke, swear, shave, clip your nails, or engage in any form of sexual relations. Fighting and arguments are also banned, and participants are prohibited from hunting, killing or unjustifiably breaking anything. You must also avoid scented products such as perfumes, moisturisers, makeup or soaps. You may, however, substitute them for unscented toiletries which are permissible to use.
                <br></br>
                Once you’re all set, you’ll begin reciting the following invocation called the talbiyah:
                <br></br>
                <span className={umrahinfo.textbold}>
                    ❁ – لَبَّيْكَ اَللَّهُمَّ لَبَّيْكَ – لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ –  إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ – لَا شَرِيكَ لَكَ 
                    </span>
                    <br></br>
                    <span className={umrahinfo.textbold}>At Your service, Allah, at Your service. At Your service, You have no partner, at Your service. Truly all praise, favour and sovereignty are Yours. 
                        You have no partner.</span> 
                </p>
                <div className={umrahinfo.audioo}>
                <audio controls >
                <source src={audioSrc} type="audio/mpeg" />
                 Your browser does not support the audio element.
                 <button onClick={handleDownload}></button>
                </audio>
                 </div>
                </div>
                {/* //// */}

                <div className={umrahinfo.umrah7}>
                <h2>Mina</h2>
                <p>Once you arrive into Mina you’ll settle into your tent. Here you’ll pray dhuhr, asr, maghrib, isha and fajr, shortening your four unit prayers to two units each, without combining them, as stated in the Quran.
                <br></br>
                Spend the night and pray to Allah (SWT), read the Qur’an and prepare for day two. It’s an important time for spiritual reflection and devotion, so try and make the most of this special night.
                </p>
                </div>
                <div className={umrahinfo.image3}>
        </div>
                {/* //// */}

                <div className={umrahinfo.umrah8}>
                <h2>Day 2: 9th Dhul Hijjah</h2>
                <p className={umrahinfo.umrah1res}>Now that you’ve performed umrah, for the rest of this blessed month, you’ll stay in Makkah to complete your spiritual journey of Hajj surrounded by your fellow Muslim brothers and sisters, SubhanAllah!
                <br></br>
                <h3>Performing Hajj:</h3>
                Fulfilling your sacred obligation of Hajj will be the most spiritual period of your life insha’Allah, filled with blessings and forgiveness from Allah (SWT)!
                </p>
                </div>
                {/* //// */}
                
                <div className={umrahinfo.umrah9}>
                <h2>Arafah</h2>
                <p>After praying fajr salat in Mina, you’ll then head to the plains of Arafah, reciting istaghfar [asking for forgiveness] and making supplications, marking the Day of Arafah when we ask Allah (SWT) for forgiveness for our sins. Upon reaching the plains of Mount Arafah, pilgrims observe dhuhr and asr prayers combined and shortened(two rakat instead of four).
                <br></br>
                On this day there, will be a sermon delivered from Masjid al-Nimra on Mount Arafah. Remember to listen to the khutbah if possible. Your group may also facilitate a translation of this sermon in English.
                </p>
                <h3>Muzdalifah</h3>
                <p className={umrahinfo.umrah1res}>
                After sunset, you’ll depart Arafah and head to Muzdalifah – an open plain between Mina and Arafat. Once you reach Muzdalifah you’ll perform your maghrib and isha salah, one after the other, shortening isha salah to two rakat.
                <br></br>
                Afterwards, you can then spend the night in worship or resting. The Prophet (SAW) went to sleep until shortly before fajr, choosing not to engage in night worship as he normally did. So, don’t be tempted to exhaust yourself but rest instead – you have a long day ahead of you!
                While in Muzdalifah, you may also collect pebbles to perform rami [the stoning of the devil] over the next three days. The size of the pebbles should be similar to the size of date stones/seeds. You will need a total of 49 pebbles.
                </p>
                </div>
                <div className={umrahinfo.image4}>
        </div>

                {/* //// */}

                <div className={umrahinfo.umrah10}>
                <h2>Day 3: 10th Dhul Hijjah (start of Eid al-Adha)</h2>
                <p className={umrahinfo.umrah1res}>After performing fajr salah you will depart Muzdalifah to go towards Mina. Remember to continuously recite the talbiyah.
                <br></br>
                The 10th of Dhul Hijjah is called the Yawm al-Nahr, or the Day of Sacrifice. For pilgrims of Hajj, this is the day of pelting pebbles at one of the Jamarat, as well as sacrificing an animal. For the rest of the Muslims around the world, this is the day of Eid.
                </p>
                <p>
                <h3>The Rami (Stoning of the Devil)</h3>
                Stoning of the Jamara – sometimes referred to as the “Stoning of the Devil” – is a ritual carried out by Hajj pilgrims whereby pebbles are thrown at three stone structures in Mina. The act of throwing stones at the Jamarat is known as “Rami”. The ritual of Rami is symbolic of the actions of Ibrahim (AS) when he was faced with the trial of having to sacrifice his son, Ismail (AS) upon the commandment of Allah (SWT).
                <br></br>
                <h3>Tawaf al-ifadha</h3>
                 <p className={umrahinfo.umrah1res}>
                You will now go to Makkah to perform tawaf al-ifadha and sa’i as part of your Hajj rituals.
                Tawaf al-ifada and sa’i are obligatory. You must perform them after the rami, sacrifice and shaving (or trimming) of the head. This tawaf and sa’i can be done between the 10th and 12th Dhul Hijjah.
                <br></br>
                With the completion of this tawaf and sa’i, you are then allowed to relax and do everything that was lawful before ihram, including engaging in marital relations. You will, however, return to your tents in Mina and continue with the remaining rituals of Hajj.
                </p>
                </p>
                </div>
                <div className={umrahinfo.image5}>
        </div>
              {/* ////////////   */}
                <div className={umrahinfo.umrah11}>
                <h2>Days 4 and 5: 11th and 12th Dhul Hijjah</h2>
                <p>These days are known as “Ayyam al-tashreeq”, or the days of drying meat. During the time of the Prophet (SAW), pilgrims would preserve the Qurbani meat by seasoning and drying them under the sun to prevent the meat from rotting.The Prophet Muhammad (SAW) said: 
                <br></br>
                “The days of tashreeq are the days of eating and drinking.” (Muslim)
                <br></br>
                You are required to stay in Mina and complete two more rami rituals on 11th and 12th Dhul Hijjah. On the afternoon of 11th Dhul Hijjah, you’ll have your 21 pebbles ready and proceed to stone the three Jamarat.
                <br></br>
                </p>
                <h2>Tawaf al-wida</h2>
                <p className={umrahinfo.umrah1res}>
                The farewell tawaf is the last rite performed before departing from Makkah. It is wajib (obligatory) and must be performed prior to leaving the boundaries of the Haram. Omitting this tawaf, without a valid reason, is not deemed lawful in Islam.
                </p>
                </div>
                <div className={umrahinfo.image6}>
        </div>

        <Footer/>
        </>
    )
}