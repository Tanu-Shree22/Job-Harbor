import { User } from '../model/Register.js';
import { Job } from '../model/Job.js';
import { UserApplic } from '../model/UserApplic.js';
import { Blogs } from '../model/Blogs.js';
import { createError } from "../middleware/error.js";
import path from 'path'
import bcrypt from 'bcryptjs';
import 'dotenv/config'
import { error } from 'console';

const salt = await bcrypt.genSalt(10);
export const getUser = async (req, res, next) => {
    console.log(req.params.id);
    if (req.params.id === req.user.id) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return next(createError(404, "User not found"));
            }
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    } else {
        next(createError(403, "You cannot access this function"));
    }
};
export const UserAppledFetch = async (req, res, next) => {
    try {
        const userApplications= await UserApplic.find({UserId:req.params.id})
        const  Jobid = userApplications.map(application => application.JobId);

        const jobs = await Job.find({ _id: { $in: Jobid } });
        res.status(200).send(jobs)
    } catch (err) {
        next(err);
    }
}
export const CompanyApplicationFetch = async (req, res, next) => {
    try {
        const userApplications= await UserApplic.find({CompanyId:req.params.id})
        const  Candidateid = userApplications.map(application => application.UserId);

        const candidate = await User.find({ _id: { $in: Candidateid } });
        res.status(200).send(candidate)
    } catch (err) {
        next(err);
    }
}
export const JobApply = async (req, res, next) => {
    try {
        if (req.params.id === req.user.id) {
            const { companyid ,jobid } = req.body;
            const dbApplic = await UserApplic.find({CompanyId: companyid, UserId: req.params.id, JobId:jobid});

            if (dbApplic.length>0) {
                res.status(200).send({ message: "Already Applied",dbApplic });
            } else {
                const newapplic = new UserApplic({
                    UserId: req.params.id,
                    JobId: jobid,
                    CompanyId: companyid
                });
                await newapplic.save();
                console.log("Job Applied");
                return res.status(201).send({ message: "Successfully" });
            }
        } else {
            res.status(400).send({ message: "Invalid user ID" });
        }
    } catch (err) {
        console.error('Error applying for job:', err);
        res.status(500).send({ message: "Internal Server Error" });
        // next(err);
    }
};
export const companyjobdata = async (req, res, next) => {    try {
        const data = await Job.find({ CompanyId: req.user.id })
        // console.log(req.params.id)
        // console.log(data)
        if (data) {
            // const data= await Job.find({UserId:req.params.id})
            // console.log(data);
            console.log("Data Send")
            return (res.status(200).send(data))
        }
        else {
            console.log("No Job Data");
            return (res.status(201).send({ message: "No Job Data" }))
        }
    } catch (err) {
        next(err);
    }
}
export const userjobdata = async (req, res, next) => {
    try {
        const data = await Job.find({});
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send(err);
        next(err);
    }
}
export const Blogsfetach = async (req, res, next) => {
    try {
        const data = await Blogs.find({});
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send(err);
        next(err);
    }
}
export const JobStatus = async (req, res, next) => {
    try {
        if (req.params.id) {
            const Jobdata = await Job.findById(req.params.id)
            // console.log(Jobdata.JobStatus)
            if (Jobdata.JobStatus) {
                Job.findOneAndUpdate({ _id: req.params.id },
                    {
                        JobStatus: false
                    }).
                    then(result => {
                        console.log("Closed")
                        res.status(200).send({ message: "change successfully done Closed" ,status:"Closed"})
                    })
            } else {
                Job.findOneAndUpdate({ _id: req.params.id },
                    {
                        JobStatus: true
                    }).
                    then(result => {
                        console.log("Active")
                        res.status(200).send({ message: "change successfully done Active",status:"Active"})
                    })
            }
        } else {
            res.status(201).send({ message: "No Job Found" })
        }
    }
    catch (err) {
        next(err);
    }
}
export const Resumefile = async (req, res,  next) => {
    try {
        const dirpath='file:///Users/sadhavsingh/Documents/Coding/React%20/Job%20harbor/Backend-Job-harbor/';
        const pdfPath= path.join(dirpath,req.file.path)
        const updateUserData={
            ResumeId: pdfPath
        }
        await User.findByIdAndUpdate(req.params.id, updateUserData);
        console.log("File uploaded")
        // console.log(pdfPath);
        res.status(200).send({message:"File uploaded successfully"})
    } catch (err) {
        next(err);
    }
}
export const search = async (req, res, next) => {
    try {
        const data= await Job.find(req.param.ie)
        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
}
export const JobPosting = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        const { positiontitle, loc, salary, requirements, responsibilities, workloaction, employmenttype, country, state, join, vacancy, startdate, lastdate } = req.body;
        try {
            const existingcompany = await Job.findOne({ Positiontitle: positiontitle });

            if (existingcompany) {
                console.log("ob already In Database")
                return res.status(400).send({ message: "Job already In Database" });
            }
            const userdata = await User.findById(req.params.id)
            const company_name = userdata.CompanyOrInsitiute
            const newJob = new Job({
                CompanyId: req.params.id,
                Company: company_name,
                PositionTitle: positiontitle,
                Location: loc,
                Salary: salary,
                Requirements: requirements,
                Responsibilities: responsibilities,
                WorkLocation: workloaction,
                Employmenttype: employmenttype,
                Country: country,
                State: state,
                Join: join,
                Vacancy: vacancy,
                Startdate: startdate,
                Lastdate: lastdate,
                Postdate: Date(),
                JobStatus: true,
            });

            // Save the new user to the database
            await newJob.save();
            console.log("Job Added");
            return res.status(200).send({ message: "Successfully Job Added" });

        } catch (err) {
            res.status(404).send({ message: "failed" }, err);
            console.error(err);
        }
    }
    else {
        createError(403, "you can not access this funcation")
    }
}
export const UserProfileUpdate = async (req, res, next) => {
    if (req.params.id === req.user.id) { 
        const { fname, lname, dob, tel, gender, email, address, country, state, profession, education, experience, techinicalskill, softskill, industryspecificskill, additialdetails } = req.body;
        try {
            const userdata = await User.findById(req.params.id);
            let secpass = await bcrypt.hash(req.body.password, salt);
            const updatedUserData = {
                Fname: fname,
                Lname: lname,
                Email: email,
                Dob: dob,
                PhoneNo: tel,
                Gender: gender,
                Address: address,
                State: state,
                Country: country,
                Profession: profession,
                Education: education,
                Experience: experience,
                TechinicalSkill: techinicalskill,
                SoftSkill: softskill,
                IndustrySpecificSkill: industryspecificskill,
                AdditialDetails: additialdetails,
                Password: secpass
            };

            // Update the user data in the database
            await User.findByIdAndUpdate(req.params.id, updatedUserData);
            console.log("User Updated");
            return res.status(200).send({ message: "Successfully Profile Updated" });

        } catch (err) {
            console.error(err);
            return res.status(404).send({ message: "Failed to update profile", error: err });
        }
    } else {
        // If the user ID does not match, send a forbidden error
        return res.status(403).send({ message: "You cannot access this function" });
    }
}
export const CompanyProfileUpdate = async (req, res, next) => {
    if (req.params.id === req.user.id) { 
        const { fname,lname,dob,tel,gender,email,address,country, state,profession,education,experience,techinicalskill,softskill,industryspecificskill,additialdetails,} = req.body;
        try {
            const userdata = await User.findById(req.params.id)
            let secpass = await bcrypt.hash(req.body.password, salt);

            const newJob = {
                Fname: fname,
                Lname: lname,
                Email: email,
                Dob: dob,
                PhoneNo: tel,
                Gender: gender,
                Address: address,
                State: state,
                Country: country,
                Profession: profession,
                Education: education,
                Experience: experience,
                TechinicalSkill: techinicalskill,
                SoftSkill: softskill,
                IndustrySpecificSkill: industryspecificskill,
                AdditialDetails: additialdetails,
                Password: secpass
            };

            // Save the new user to the database
            await User.findByIdAndUpdate(req.params.id, newJob);
            // await User.updateMany(newJob);
            console.log("User Updated");
            return res.status(200).send({ message: "Successfully Profile Updated" });

        } catch (err) {
            res.status(404).send({ message: "failed" }, err);
            console.error(err);
        }
    }
    else {
        createError(403, "you can not access this funcation")
    }
}
export const CreateBlogs = async (req, res, next) => {
    try {
        if (req.params.id !== req.user.id) {
            return res.status(403).send({ message: "You cannot access this function" });
        }

        const userdata = await User.findById(req.params.id);
        console.log(userdata.Fname);

        const { description, photoid, posttitle } = req.body;

        const existingBlog = await Blogs.findOne({ Description: description });
        if (existingBlog) {
            console.log("Blog already in Database");
            return res.status(400).send({ message: "Blog already in Database" });
        }
        else{
        const newBlogs = {
            Fname: req.user.Fname,
            UserId: req.params.id,
            Lname: req.user.Lname,
            Description: description,
            PostTitle: posttitle,
            Date: Date()
        }
        console.log(photoid)
        await Blogs.findByIdAndUpdate(photoid, newBlogs);

        console.log("Blog Added");
        return res.status(200).send({ message: "Successfully added Blog" });
    }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Failed to add Blog", error: error.message });
        }
};

export const uploadImage= async(req,res,next)=>{
    if(!req.file){
        return res.status(404).send({msg:"file not found"})
    }
    const imagename= req.file.filename;
    console.log(imagename)
    try{
        const blogsid=await Blogs.create({PhotoId:imagename});
        let blogid= blogsid._id
        let imagepath=blogsid.PhotoId
        return res.status(200).send({message:"uploaded",blogid,imagepath});
    }catch(error){
        return res.status(404).send(error)
    }
}
export const  getimage= async(req,res,next)=>{
    try{
         Blogs.find({}).then(data=>{
            res.send({status:"ok",data:data})
         })

    }catch(error){
        return res.status(404).send(error)
    }
}
