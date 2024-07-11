// components/WheelsList.js
"use client";
import React from 'react';
import styles from '@/app/styles/transport.module.css';
import TransportHeader from '../components/Transportheader';
import Footer from '../components/Footer';
const mainTransports = [
  { name: 'Saudi Arabian Airlines (Saudia)', image: '/saudiline.jpg' },
  { name: 'King Abdulaziz International Airport', image: '/azizairport.jpg' },
  { name: 'King Khalid International Airport', image: '/khalidairport.jpg' },
];

const otherTransports = [
  { name: 'Saudi Public Transport Company (SAPTCO)', image: '/saptco.jpg' },
  { name: 'Haramain High Speed Railway', image: '/railway.jpg' },
  { name: 'Riyadh Metro', image: '/riyadh.jpg' },
  { name: 'Al-Mashaaer Al-Mugaddassah Metro', image: '/masheer.jpg' },
  { name: 'Uber', image: '/uber.jpg' },
  { name: 'Careem', image: '/careem.jpg' },
  { name: 'Taxi', image: '/taxi.jpg' },
  { name: 'Bus', image: '/bus.jpg' },
  { name: 'Private Car', image: '/private.jpg' },
];

export default function TransportList (){
  return (
    <>
    <TransportHeader/>
    <section className={styles.transportList}>
      <h1>Transport</h1>
      
      <div className={styles.mainGrid}>
        {mainTransports.map((transport, index) => (
          <div key={index} className={styles.card}>
            <img src={transport.image} alt={`${transport.name} image`} />
            <h2>{transport.name}</h2>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {otherTransports.map((transport, index) => (
          <div key={index} className={styles.card}>
            <img src={transport.image} alt={`${transport.name} image`} />
            <h2>{transport.name}</h2>
          </div>
        ))}
      </div>
    </section>
      <Footer/>
    </>
  );
};


