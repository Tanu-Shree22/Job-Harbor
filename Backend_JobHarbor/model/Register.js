import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    ProfilePhoto: String,
    ResumeId: String,
    Fname: String,
    Lname: String,
    Email: String,
    Dob:Date,
    PhoneNo:Number,
    Gender: String,
    Address: String,
    State: String,
    Country: String,
    Profession: String,
    CompanyOrInsitiute: String,
    Education: String,
    Experience: String,
    TechinicalSkill: String,
    SoftSkill: String,
    IndustrySpecificSkill: String,
    AdditialDetails: String,
    Password: String,
    admin:Number
    });

 export const User = mongoose.model('User', userSchema);