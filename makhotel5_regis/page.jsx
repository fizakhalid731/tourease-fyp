"use client";
import { useState ,useEffect } from 'react';
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import hotelstyle from '@/app/makkahstyles/regis_hotel5.module.css';

import Link from 'next/link';

export default function Makhotel5_regis() {


    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [VisaNumber, setVisaNumber] = useState("");
    const [numberOfNights, setNumberOfNights] = useState(1);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");
    const [errors, setErrors] = useState("");
    const router = useRouter();

    useEffect(() => {
        calculation();
      }, [selectedOption, numberOfNights]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        setNumberOfNights(0);
        setSelectedOption(e.target.value);
      
        setName('');
        setEmail('');
        setVisaNumber('');
        setCheckInDate('');
        setCheckOutDate('');
        setNumberOfGuests(1);
     if(VisaNumber.length !== 10){
        setErrors('Visa Number is in Valid.')
     }

     try {

      const resUserExists = await fetch("api/userExists",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({Email}),
      });

      const {user} = await resUserExists.json();

      if(!user) {
        setErrors("User is Not Exists! Now Login TourEase For Booking")
        return;
      }

      const res = await fetch("api/hoteldata",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, Email, VisaNumber, numberOfNights, numberOfGuests, selectedOption, checkInDate, 
            checkOutDate, totalCost,
       }),
     });
  
     if(res.ok){
      const form = e.target;
      form.reset();
      try{
        const res = await fetch("/api/hotelemail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email,
          }),
        });
      } catch (error) {
        setErrors("Error, try again");
        console.log(error);
      }
      router.push('/package');
     }
     
   else{
    console.log("fallied");
   }
  

   } catch (error) {
    console.log("error during Saved information"); 
   }


      // try {
      //   const res = await fetch("/api/hotelsendemail", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       Email,
      //     }),
      //   });
      //   if (res.status === 400) {
      //     setErrors("This email is not registered");
      //   }
      //   if (res.status === 200) {
      //     router.push("/loginform");
      //   }
      // } catch (error) {
      //   setErrors("Error, try again");
      //   console.log(error);
      // }




      };

      const today = new Date().toISOString().split('T')[0]; // Get today's date in the format "YYYY-MM-DD"

    const handleCheckInDateChange = (e) => {
      const selectedDate = e.target.value;
      setCheckInDate(selectedDate);
      setCheckOutDate(''); // Reset check-out date if check-in date changes
    };
  
    const handleCheckOutDateChange = (e) => {
      setCheckOutDate(e.target.value);
    };

    

// calculation

const calculation = () => {
    
    const jsonData = require('../../public/data/recode.json');
    
    
  if (selectedOption === " 2 single bed's,  Price(PKR 39,241) + PKR 1,962 Taxes." ) {
    
      const twosingle = jsonData.hotel5.two_single_beds + jsonData.hotel5.two_single_beds_taxes; 
       const totaltwpsingle = twosingle * numberOfNights;
        setTotalCost(totaltwpsingle);
    
      
    }
    
  else if(selectedOption === " 3 single bed's,  Price(PKR 288,592 ) + PKR 14,429 Taxes." ){
      const threebed_room = jsonData.hotel5.three_single_beds + jsonData.hotel5.three_single_beds_taxes;
      const totalthreebed_room = threebed_room * numberOfNights;
      setTotalCost(totalthreebed_room );
    
    }
    else if(selectedOption === " Quadruple Room,  Price(PKR 67,079) + PKR 12,527   Taxes." ){
      const fourbed_room = jsonData.hotel5.four_single_beds + jsonData.hotel5.four_single_beds_taxes;
      const totalfourbed_room = fourbed_room * numberOfNights;
      setTotalCost(totalfourbed_room );
    
    }
    else if(selectedOption === " Family room,  Price(PKR 424,203) +PKR 21,210  Taxes."){
      const fivebed_room = jsonData.hotel5.five_single_beds + jsonData.hotel5.five_single_beds_taxes;
      const totalfivebed_room = fivebed_room * numberOfNights;
      setTotalCost(totalfivebed_room );
    
    }

    else{
        setTotalCost(0);
        setNumberOfNights(0);
      }
  }
 
    



    return(
        <>
        < div className={hotelstyle.background}>
        </div>
       <div className={hotelstyle.hotelpage}>
        <nav className={hotelstyle.navicon}>
        <Link href='/package'><span className={hotelstyle.icon}><RxCross1 /></span></Link>
        </nav>
    <header className={hotelstyle.header}>
    <h1> -o( Elaf Al Mashaer Makkah )o-</h1>
    </header>
     <form onSubmit={handleSubmit} className={hotelstyle.hotelform}>

        <div className={hotelstyle.formGroup}>
        <div >
        <label className={hotelstyle.formGrouplabel}>
        Full Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
       </label>
        </div>

        <div >
        <label className={hotelstyle.formGrouplabel1}>
        Visa Number
        <input type="text" value={VisaNumber} onChange={(e) => setVisaNumber(e.target.value)} required />
       </label>
        </div>

        <div >
        <label className={hotelstyle.formGrouplabel2}>Select Room:</label>
       <select  className={hotelstyle.formGroupselect} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">-- ROOM --</option> 
        <option value=" 2 single bed's,  Price(PKR 39,241) + PKR 1,962 Taxes." >2 single bed's (PKR 39,241) </option>
        <option value=" 3 single bed's,  Price(PKR 288,592 ) + PKR 14,429 Taxes." >3 single bed's (PKR 288,592) </option>
        <option value=" Quadruple Room,  Price(PKR 67,079) + PKR 12,527   Taxes." >4 single bed's (PKR 67,079) </option>
        <option value=" Family room,  Price(PKR 424,203) +PKR 21,210  Taxes." >Family room /5 single bed's (PKR 424,203)</option>
      </select>
        </div>
        <br></br>
        <div >
        <label className={hotelstyle.formGrouplabel3}>
        Check-in Date:
        <input type="date" value={checkInDate} onChange={handleCheckInDateChange} min={today} required />
      </label>
        </div>
        </div>

        <div className={hotelstyle.formGroup2}>
        <div >
        <label className={hotelstyle.formGroup2label}>
        Email:
        <br></br>
        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
        </div>

        <div >
        <label className={hotelstyle.formGroup2label1}>
        Adults:
        <br></br>
        <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} min="1" max='4' required />
      </label>
        </div>

         <div >
         <label className={hotelstyle.formGroup2label2}>
        Nights:
        <br></br>
        <input type="number" value={numberOfNights} onChange={(e) => setNumberOfNights(e.target.value)} min="1" max='30'  />
      </label>
        </div>

        <div >
        <label className={hotelstyle.formGroup2label3}>
        Check-out Date:
        <br></br>
        <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} min={checkInDate || today} required />
      </label>
        </div>
        </div>
        <br></br>
         
         {errors && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors}</p>}
         <button type="submit">Book Now</button>
         <br></br>
        <div className={hotelstyle.calculations} >
          <p>Room:    {selectedOption}</p>
     <p >{numberOfNights} nights</p>
     <p>Total Cost: ${totalCost}</p>
     </div>
          
     </form>
        </div>

        </>
    )
    
}