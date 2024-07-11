"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { RxCross1} from "react-icons/rx";
import regstyle from '@/app/styles/register.module.css';
import Link from 'next/link';


export default function register(){
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] =useState("");
    const [errors, setErrors] = useState("");
    const router = useRouter();
     
  
     
    const handleSubmit = async (e)=>{
      e.preventDefault();
     
      
      
       if(!Firstname || !Lastname || !Email ||!Password){
        setErrors('Fill All Fields.');
        return;
       }
       else if (!isValidEmail(Email)) {
        setErrors('Invalid email format');
        return;
      }

       else if (Password.length < 6) {
        setErrors('Maximum Six Letters Password.');
        return;
        
      } 
      
    // api validation

    try {

      const resUserExists = await fetch("api/userExists",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({Email}),
      });

      const {user} = await resUserExists.json();

      if(user) {
        setErrors("User already Exists.")
        return;
      }

      const res = await fetch("api/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          Firstname, 
          Lastname, 
          Email, 
          Password,
       }),
     });
  
     if(res.ok){
      const form = e.target;
      form.reset();
      router.push('/loginform');
     }
     else{
      console.log("user registeration failled");
     }

   } catch (error) {
    console.log("error during registeration"); 
   }

    };

    const isValidEmail = (value) => {
      // Implement email validation logic here
      return /\S+@\S+\.\S+/.test(value);
    };


    return(
        <div >
          <div className={regstyle.image}>
        </div>
    <div className={regstyle.regpage}>
      <nav>
        <Link href='/'><span className={regstyle.icon}><RxCross1 /></span></Link>
        </nav>
    <header className={regstyle.header}>
    <h1> -o( REGISTRATION )o-</h1>
    </header>
     <form onSubmit={handleSubmit} className={regstyle.regform}>

        <div className={regstyle.formGroup}>
        <div >
        <label >First Name:</label>
        <input 
         type="text"
         placeholder="First Name" 
        //  value={firstname}
         onChange={(e) => setFirstname(e.target.value)} 
         
        />
        
        </div>

        <div >
        <label>Last Name:</label>
        <input 
         type="text" 
         placeholder="Last Name" 
        //  value={lastname}
         onChange={(e) => setLastname(e.target.value)} 
        />
        </div>
        </div>

        <div className={regstyle.formGroup2}>
        <div >
        <label >Email:</label>
        <input 
        type="text"
        placeholder="Email"
        // value={Email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>

         <div >
        <label >Password:</label>
        <input 
         onChange={(e) => setPassword(e.target.value)}
         type="password" 
         placeholder="Password" 
        //  value={Password}
        
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
          SignIn
          </button><br></br>
        
        <p>Don't have an account?  Register Now!</p>
          
     </form>

    </div> 
    

        </div>
    )
}