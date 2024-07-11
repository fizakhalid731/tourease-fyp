"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import logstyle from '@/app/styles/login.module.css';
import Link from 'next/link';
import { signIn } from 'next-auth/react';


export default function login(){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] =useState("");
    const [errors, setErrors] = useState("");
    const router = useRouter();
     
  
     
    const handleSubmit = async (e)=>{
      e.preventDefault();
     
       if(!Email ||!Password){
        setErrors('Fill All Fields.');
        return;
       }
      
       try {
        const res = await signIn("credentials", {
          Email,
          Password,
          redirect: false,
        });
  
        if (res.error) {
          setErrors("Invalid Credentials");
          return;
        }
        else{
            // alert("Login SuccessFully.")
            try{
              const res = await fetch("/api/emailsend", {
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

          }
         router.replace("/");
      } catch (error) {
        console.log(error);
      }
        


    };



    return(
        <>
        <div className={logstyle.image}>
        </div>
        <div onSubmit={handleSubmit} className={logstyle.logpage}>
          <nav>
           <Link href='/'><span className={logstyle.icon}><RxCross1 /></span></Link>
           </nav>
         <header className={logstyle.header}>
          <h1> -o( LOGIN )o-</h1>
          </header>

       <form className={logstyle.logform}>
        <div className={logstyle.formGroup}>
        <div>
        <label >Email:</label>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>

         <div >
        <label >Password:</label>
        <input 
        type="Password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
        /> 
        </div>
        </div>

        <br></br>
        {/* {errors.Email && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors.Email}</p>}
        {errors.Password && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors.Password}</p>}
        {errors.allfields && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors.allfields}</p>}
        {errors.alreadyexist && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors.alreadyexist}</p>} */}
         
         {errors && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors}</p>}
        <button>
          Login
          </button>
          <p className={logstyle.forgottext}>Forgot Password?<Link href='/forgotpassword'>Reset Here</Link></p> 
         
        <p className={logstyle.ptext}>Don't have an account?  Register Now!</p>
          
     </form>

    </div> 
    

        </>
    )
}