import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import authrouter from './routes/authR.js'
import userroutes from "./routes/userR.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(cors(
  {
    origin:'http://localhost:5173',
    credentials : true
  }
));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let a = await mongoose.connect('mongodb://localhost:27017/JobHarborDB')
console.log("DB Connected")


const port = 3000

app.use('/auth', authrouter);
app.use('/user',userroutes);


app.listen(port, () => {
  console.log(`Job Harbor app listening on port ${port}`)
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
  });
});