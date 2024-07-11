import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";


export const POST = async (request) => {
  const {Password, Email} = await request.json();

  await connectMongoDB();
  
  const existingUser = await User.findOne({ Email });
  const hashedPassword = await bcrypt.hash(Password, 10);
  existingUser.Password = hashedPassword;
  
  existingUser.resetToken = undefined;
  existingUser.resetTokenExpiry = undefined;

  try {
    await existingUser.save();
    return new NextResponse("Password is updated",{status:200});
  } catch (error) {
    return new NextResponse(error,{status:500,});
  }

};