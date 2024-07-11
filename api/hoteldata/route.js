import { connectMongoDB } from "@/lib/mongodb";
import Hoteluser from "@/hotelmodels/hoteluser";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {name, Email, VisaNumber, numberOfNights, numberOfGuests, selectedOption, checkInDate, 
            checkOutDate, totalCost} =await req.json();
        
        await connectMongoDB();
        await Hoteluser.create({name, Email, VisaNumber, numberOfNights, numberOfGuests, selectedOption, checkInDate, 
            checkOutDate, totalCost});       //store data in database
        
        return NextResponse.json({message: "User Information Save"},
        {status: 201});
    } catch (error) {
        return NextResponse.json({message: "User Information Not Save error!"},
        {status: 500});
    }
}