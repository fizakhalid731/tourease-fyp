import mongoose,{Schema, models} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    VisaNumber: {
        type: String,
        required: true,
    },
    numberOfNights:{
        type: String,
        required: true,
    },
    numberOfGuests:{
        type: String,
        required: true, 
    },
    selectedOption: {
        type: String,
        required: true,
    },
    checkInDate: {
        type: String,
        required: true,
    },
    checkOutDate: {
        type: String,
        required: true,
    },
    totalCost: {
        type: String,
        required: true,
    },
},
 
       { timestamps: true}
 
);

const HotelBookings = models.HotelBookings || mongoose.model("HotelBookings", userSchema);
export default HotelBookings;