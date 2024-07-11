import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const { Email} = await request.json();

  await connectMongoDB();

  console.log(Email);
  const body = "Successfully Login In TOUREASE: ";
    const msg = {
      to: Email,
      from:"Toureasejourneys@gmail.com",
      subject: "Login Successfully",
      text: body
      
    }
  
    sgMail.setApiKey(process.env.EMAILSEND_API_KEY|| "");
  
    sgMail.send(msg).then(()=>{
        return new NextResponse("send mail",{status:400});
    //   console.log("send email");
    })


    .catch(async(error)=>{
           console.log("Fail sending email.");
    });


};