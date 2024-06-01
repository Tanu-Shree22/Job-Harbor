import express from "express";
import { verifyToken } from "../middleware/verifytoken.js";
import {getUser ,companyjobdata ,search, JobApply,JobPosting,Resumefile,getimage, JobStatus, userjobdata, CreateBlogs, Blogsfetach, UserProfileUpdate, CompanyProfileUpdate, UserAppledFetch, CompanyApplicationFetch, uploadImage} from "../controller/userfun.js";
import { upload ,BlogImageupload } from "../middleware/multer.js";
// import { blogImageUpload } from "../middleware/upload.js";
const routes= express.Router();
  
routes.get("/getUser/:id",verifyToken,getUser)
routes.post("/JobPosting/:id",verifyToken,JobPosting)
routes.post("/resume/:id",upload.single('file'),verifyToken,Resumefile)
routes.post("/jobapply/:id",verifyToken,JobApply)
routes.put("/createblogs/:id",verifyToken,CreateBlogs)
routes.get("/company/jobdata/:id",verifyToken,companyjobdata)
routes.get("/userappledfetch/:id",verifyToken,UserAppledFetch)
routes.get("/companyapplicationfetch/:id",verifyToken,CompanyApplicationFetch)
routes.get("/jobdata/:id",verifyToken,userjobdata)
routes.get("/blogs",verifyToken,Blogsfetach) 
routes.get("/jobstatus/:id",verifyToken,JobStatus)
routes.get("/search/:id",search)
routes.put("/userprofileupdate/:id",verifyToken,UserProfileUpdate)
routes.put("/companyprofileupdate/:id",verifyToken,CompanyProfileUpdate)
routes.post("/imageupload/:id",BlogImageupload.single('file'),verifyToken,uploadImage)
routes.get("/getimage/:id",verifyToken,getimage)

 
export default routes;