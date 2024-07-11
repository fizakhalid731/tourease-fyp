import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import crypto from "crypto";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const { token} = await request.json();

  await connectMongoDB();
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({ 
    resetToken: hashedToken,
    resetTokenExpiry: { $gt: Date.now()}
  })

  if(!user){
    return new NextResponse("Invalid Token or has Expired", { status: 400 });
  }
 
  return new NextResponse(JSON.stringify(user), { status: 200 });

};