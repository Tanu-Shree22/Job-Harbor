import mongoose from "mongoose";
const BlogsSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    UserId: String,
    PhotoId: String,
    PostTitle:String,
    Date:Date,
    Description: String,
    });

 export const Blogs = mongoose.model('Blogs', BlogsSchema);