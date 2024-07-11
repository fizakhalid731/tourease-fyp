"use client";
import aboutstyle from '@/app/styles/about.module.css'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Header />
      <div className={aboutstyle.container}>
        <h2 className={aboutstyle.heading}>Embark On Your Umrah Journey Through This Gateway</h2>
        <div className={aboutstyle.section}>
          <div className={aboutstyle.image} style={{ backgroundImage: "url('/fp2.jpg')" }}></div>
          <div className={aboutstyle.text}>
            <p>
              Utilize tourease, the inaugural comprehensive planning, booking, and experience platform,
              to craft your Umrah itinerary encompassing Makkah, Madina, and beyond.
              tourease offers a seamless solution for global travelers to efficiently coordinate their
              entire pilgrimage, covering tasks ranging from eVisa application to hotel and flight reservations.
            </p>
          </div>
        </div>

        <h2 className={aboutstyle.heading}>Language</h2>
        <div className={aboutstyle.section}>
          <div className={aboutstyle.text}>
            <p>
              Arabic holds the status of the official language in Saudi Arabia, serving as the primary medium for official
              dealings and public transactions. English, functioning as an informal second language, is widely spoken across
              various segments of the society. Bilingual road signs, featuring information in both Arabic and English,
              are a common sight in the Kingdom.
            </p>
          </div>
          <div className={aboutstyle.image} style={{ backgroundImage: "url('/fp4.jpg')" }}></div>
        </div>

        <h2 className={aboutstyle.heading}>Culture</h2>
        <div className={aboutstyle.section}>
          <div className={aboutstyle.image} style={{ backgroundImage: "url('/fp3.jpg')" }}></div>
          <div className={aboutstyle.text}>
            <p>
              Saudi Arabia's cultural tapestry is intricately woven with its abundant heritage and traditions,
              shaped by its historical significance as a crucial trade hub and birthplace of Islam. In recent times,
              the Kingdom has undergone a significant cultural shift, modifying time-honored customs to harmonize with the requirements
              of the contemporary world we presently inhabit.
            </p>
          </div>
        </div>

        <h2 className={aboutstyle.heading}>Currency exchange</h2>
        <div className={aboutstyle.section}>
          <div className={aboutstyle.text}>
            <p>
              Conducting currency exchange and transactions in Saudi Arabia is a straightforward process.
              The official currency of the country is the Saudi riyal (ر.س SAR), which is divided into 100 halala.
              Banknotes are available in denominations of five riyals, ten riyals, 50 riyals, 100 riyals, and 500 riyals. Additionally,
              coins come in values of one riyal, two riyals, 50 halala, 25 halala, 10 halala, 5 halala, and 1 halala.
            </p>
          </div>
          <div className={aboutstyle.image} style={{ backgroundImage: "url('/p1.jpg')" }}></div>
        </div>
      </div>
      <Footer />
    </>
  )
}
