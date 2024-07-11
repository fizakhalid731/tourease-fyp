// components/UmrahPackages.js
"use client";
import React from 'react';
import styles from '@/app/styles/standardpack.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import StandPackHeader from '../components/Standpackheader';
import Footer from '../components/Footer';

export default  function UmrahPackages (){
  return (
    <>
    <StandPackHeader/>
    <section className={styles.umrahPackages}>
      <h1>Packages insight</h1>
      <div className={styles.packagesGrid}>
        <div className={styles.package}>
          <img src="/pacck.jpeg" alt="Basic Package" />
          <h2>Basic Package</h2>
          <p>Includes transportation and accommodation</p>
          <ul className={styles.features}>
            <li><FaCheckCircle /> 5-star hotel stay</li>
            <li><FaCheckCircle /> Airport transfers</li>
            <li><FaCheckCircle /> Guided tours</li>
          </ul>
          {/* <button>Learn More</button> */}
        </div>
        <div className={styles.package}>
          <img src="/spak.jpg" alt="Standard Package" />
          <h2>Standard Package</h2>
          <p>Includes transportation, accommodation, and guided tours</p>
          <ul className={styles.features}>
            <li><FaCheckCircle /> 5-star hotel stay</li>
            <li><FaCheckCircle /> Airport transfers</li>
            <li><FaCheckCircle /> Guided tours</li>
            <li><FaCheckCircle /> All meals included</li>
          </ul>
          {/* <button>Learn More</button> */}
        </div>
        <div className={styles.package}>
          <img src="/ppack.jpg" alt="Premium Package" />
          <h2>Premium Package</h2>
          <p>Includes all services plus premium support</p>
          <ul className={styles.features}>
            <li><FaCheckCircle /> 5-star hotel stay</li>
            <li><FaCheckCircle /> Airport transfers</li>
            <li><FaCheckCircle /> Guided tours</li>
            <li><FaCheckCircle /> All meals included</li>
            <li><FaCheckCircle /> 24/7 support</li>
          </ul>
          {/* <button>Learn More</button> */}
        </div>
        {/* Add more packages as needed */}
      </div>
    </section>
     <Footer/>
    </>
  );
};


