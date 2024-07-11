import mongoose, { Schema, models } from "mongoose";
 
const userSchema = new Schema({
    Firstname: {
        type: String,
        required: true,
    },
    Lastname: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
       resetToken:{
        type: String,
        required: false,
    },
    resetTokenExpiry:{
        type: Date,
        required: false, 
    },
},
 
       { timestamps: true}
 
);

const RegisterUsers = models.RegisterUsers || mongoose.model("RegisterUsers", userSchema);
export default RegisterUsers;