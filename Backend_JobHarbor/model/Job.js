import mongoose from "mongoose";
const JobSchema = new mongoose.Schema({
    CompanyId:String,
    Company: String,
    PositionTitle	: String,
    Location: String,
    Salary:Number,
    Requirements: String,
    Responsibilities: String,
    WorkLocation: String,
    Employmenttype: String,
    Country: String,
    State: String,
    Join:Date,
    Vacancy:Number,
    Startdate:Date,
    Lastdate: Date,
    Postdate: Date,
    JobStatus: Boolean,
    });

 export const Job = mongoose.model('Job', JobSchema);