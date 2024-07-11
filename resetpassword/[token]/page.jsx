"use client";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import rpasstyle from '@/app/styles/resetpass.module.css';
import Link from 'next/link';


export default function resetpassword({params}){

  console.log(params.token);

    const [Varified, setVarified] =useState(false);
    const [user, setUser] = useState(null);
    const [Password, setPassword] =useState("");
    const [errors, setErrors] = useState("");
    const router = useRouter();
     
    

    useEffect(() => {                           //checking token is valid or not expre
     const verifyToken = async () =>{
      
       try {
                const res = await fetch("/api/verifytoken", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    token: params.token,
                  }),
                });
                if (res.status === 400) {
                  setErrors("Invalid Token or has Expired");
                  setVarified(true);
                }
                if (res.status === 200) {
                   setVarified(true);
                   const userData = await res.json();
                   setUser(userData);
                  //  router.push("/loginform");
                }
              } catch (error) {
                setErrors("Error, try again");
                console.log(error);
              }
     }
     verifyToken();
   }, [params.token]);
     
    const handleSubmit = async (e)=>{
      e.preventDefault();
     
     
      
       try {
                const res = await fetch("/api/resetpassword", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Password,
                    Email: user.Email
                  }),
                });
                if (res.status === 400) {
                  setErrors("Something web wrong, try again!");
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
        <div className={rpasstyle.image}>
        </div>
        <div onSubmit={handleSubmit} className={rpasstyle.logpage}>
          <nav>
           <Link href='/'><span className={rpasstyle.icon}><RxCross1 /></span></Link>
           </nav>
         <header className={rpasstyle.header}>
          <h1> -o( Reset Password )o-</h1>
          </header>

       <form className={rpasstyle.logform}>
        <div className={rpasstyle.formGroup}>
        <div>
        <label >Password:</label>
        <input 
        type="Password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
        /> 
        </div>

         </div>
        <br></br>
      
         
         {errors && <p style={{ color: 'red', marginLeft: 56, marginTop:-3}}>{errors}</p>}
        <button 
        type='submit'
        disabled={errors.length > 0}
        >
          Submit
          </button><br></br>
        
        
          
     </form>

    </div> 
    

        </>
    )
}