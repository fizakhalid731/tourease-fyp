import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const { Email} = await request.json();

  await connectMongoDB();

  const existingUser = await User.findOne({ Email });

  if (!existingUser) {
    return new NextResponse("Email doesn't exists", { status: 400 });
  }


  const resetToken = crypto.randomBytes(20).toString('hex');
  const passwordResetToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");


  const passwordResetEpires = Date.now() + 3600000;

  existingUser.resetToken = passwordResetToken;
  existingUser.resetTokenExpiry = passwordResetEpires;
  const resetUrl = `localhost:3000/resetpassword/${resetToken}`;

  console.log(resetUrl);


  const body = "If You Want Reset Password Then Open This url In Your Browser: " + resetUrl ;
    const msg = {
      to: Email,
      from:"Toureasejourneys@gmail.com",
      subject: "Reset Password",
      text: body
      
    }
  
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  
    sgMail.send(msg).then(()=>{
      return new NextResponse("Reset Password email is send.",{status:200});
    })


    .catch(async(error)=>{
           existingUser.resetToken = undefined;
           existingUser.resetTokenExpiry = undefined;
           await existingUser.save();
        
           return new NextResponse("Fail sending email.",{
            status:400,
        });
    });

    try {
            await existingUser.save();
            return new NextResponse("I want to email is send for reseting password.",{
                status:200,
            });
          } catch (error) {
            return new NextResponse(error,{
                status:500,
            });
          }

};