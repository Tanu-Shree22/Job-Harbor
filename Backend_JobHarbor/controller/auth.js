import express, { json } from 'express'
import bcrypt from 'bcryptjs';
import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { User } from '../model/Register.js'
let router = express.Router();

const salt = await bcrypt.genSalt(10);
const Jwt_secrt = process.env.Jwt_secrt;

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ Email: email });

    let secpass = await bcrypt.hash(req.body.password, salt)
    if (user) {
      if (await bcrypt.compare(password, user.Password)) {

        console.log(user.id, user.Fname)

        const {Password, ...other}=user._doc;

        let authtoken = jwt.sign({id:user.id}, Jwt_secrt, {}, (err,token) => {
          if (err) throw err;
          res.cookie('access_token', token,{ httpOnly: true }).status(200).send({ message: "Login Successful",other,token });
          console.log("Login Successful")
        });
        
      } else {
        res.send({ message: "Password doesn't match" });
        console.log("Password doesn't match")
      }
    } else {
      res.status(404).send({ message: "User not registered" });
      console.log("User not registered")

       
    }
  } catch (error) {
    console.error("Error logging in:", error);
    next(err);
    // res.status(500).send({ message: "An error occurred while logging in", success });
  }
};



export const Register = async (req, res, next) => {

  const { fname, lname, email, dob, tel, profession, cneu, password } = req.body;

  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ Email: email });

    if (existingUser) {
      console.log("User already registered")
      return res.status(400).send({ message: "User already registered" });
    }
    let secpass = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      Fname: fname,
      Lname: lname,
      Email: email,
      Dob: dob,
      PhoneNo: tel,
      Profession: profession,
      CompanyOrInsitiute: cneu,
      Password: secpass,
      admin: 0
    });

    // Save the new user to the database
    await newUser.save();
    console.log("Registered");
    return res.status(200).send({ message: "Successfully registered" });
  } catch (error) {

    console.error("Error registering user:", error);
    next(err);
    // return res.status(500).send({ message: "Failed to register user" });
  }
};

export const Signout = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.status(200).json('User has been logged out!');
      console.log("Logout Successful")
    } catch (error) {
      next(error);
    }
  };
export default router;