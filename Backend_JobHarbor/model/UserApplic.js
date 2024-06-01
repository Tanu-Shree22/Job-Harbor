import mongoose from "mongoose";
const UserApplicSchema = new mongoose.Schema({
    CompanyId: String,
    UserId	: String,
    JobId	: String,
    });

 export const UserApplic = mongoose.model('UserApplic', UserApplicSchema);