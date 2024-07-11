import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req){
    try {
        const {Firstname, Lastname, Email, Password} =await req.json();
        const hashedPassword = await bcrypt.hash(Password, 10);

        await connectMongoDB();
        await User.create({Firstname, Lastname, Email, Password: hashedPassword });       //store data in database
        
        return NextResponse.json({message: "user register"},
        {status: 201});
    } catch (error) {
        return NextResponse.json({message: "user register error!"},
        {status: 500});
    }
}