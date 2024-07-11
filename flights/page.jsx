"use client";
import React from 'react';
import styles from '@/app/styles/flights.module.css';
import FlightHeader from '../components/Flightheader';
import Footer from '../components/Footer';

const flights = [
    { name: 'Pakistan International Airlines (PIA)', logo: '/PIA.jpg' },
    { name: 'Emirates Airlines', logo: '/emirates.jpg' },
    { name: 'Qatar Airways', logo: '/qatar.jpg' },
    { name: 'Etihad Airways', logo: '/ethad.jpg' },
    { name: 'Turkish Airlines', logo: '/turkish.jpg' },
    { name: 'Saudi Arabian Airlines', logo: '/Suadi.jpg' },
    { name: 'Oman Air', logo: '/oman.jpg' },
    { name: 'Gulf Air', logo: '/gulf.jpg' },
    { name: 'Fly dubai', logo: '/flydubai.jpg' },
    { name: 'SriLankan Airlines', logo: '/srilankan.jpg' },
    { name: 'Kuwait Airways', logo: '/kuwat.jpg' },
    { name: 'Air blue Airlines', logo: '/airblue.jpg' },
  ];
  
  export default function FlightList () {
    return (
      <>
      <FlightHeader/>
      <section className={styles.flightList}>
        <h1>AirLines</h1>
        <div className={styles.grid}>
          {flights.map((flight, index) => (
            <div key={index} className={styles.card}>
              <img src={flight.logo} alt={`${flight.name} logo`} />
              <h2>{flight.name}</h2>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
      </>
    );
  };
  