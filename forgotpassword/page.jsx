"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import forgotstyle from '@/app/styles/forgotpass.module.css'
import Link from 'next/link';


export default function forgotpassword(){
    const [Email, setEmail] = useState("");
    const [errors, setErrors] = useState("");
    const router = useRouter();
     
  
     
    const handleSubmit = async (e)=>{
      e.preventDefault();
     
       if(!Email ){
        setErrors('Fill All Field.');
        return;
       }
       try {
                const res = await fetch("/api/forgotpassword", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Email,
                  }),
                });
                if (res.status === 400) {
                  setErrors("This email is not registered");
                }
                if (res.status === 200) {
                  router.push("/loginform");
                }
              } catch (error) {
                setErrors("Error, try again");
                console.log(error);
              }

       



    };



    return(
        <>
        <div className={forgotstyle.image}>
        </div>
        <div onSubmit={handleSubmit} className={forgotstyle.logpage}>
          <nav>
           <Link href='/'><span className={forgotstyle.icon}><RxCross1 /></span></Link>
           </nav>
         <header className={forgotstyle.header}>
          <h1> -o( Forgot Password )o-</h1>
          </header>

       <form className={forgotstyle.logform}>
        <div className={forgotstyle.formGroup}>
        <div>
        <label >Email:</label>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>

         
        </div>

        <br></br>
      
         
         {errors && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors}</p>}
        <button>
          Continue
          </button><br></br>
        
        <p className={forgotstyle.logformtext}>Don't have an account?  Register Now!</p>
          
     </form>

    </div> 
    

        </>
    )
}