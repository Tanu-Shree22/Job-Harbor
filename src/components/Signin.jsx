import React, { useContext }  from 'react'
import { useForm } from "react-hook-form"
import './css/Signin.css'
import axios from 'axios';
import userstate from '../context/userstate'
import Layout from './Layout';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"; 
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';


function Signin() {
  const a = useContext(userstate);
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()
  const dispatch= useDispatch();
   
  const onSubmit = (data) => {
    dispatch(loginStart())
    try{
    axios.post("http://localhost:3000/auth/login", data,{withCredentials: true})
      .then(res => {
        alert(res.data.message); 
        if(res.data.other._id){
        console.log(res.headers);
        dispatch(loginSuccess(res.data))
        if(res.data.other.profession==="Employer"){
        navigate('/company/dashboard'); }
        else{
          navigate('/user/dashboard'); }

      }
      })
    }catch{
        console.error("Login error:", error);
        dispatch(loginFailure());

        // Handle any errors here
      };
  }
  
  // const onSubmit = (data) => {axios.post("http://localhost:3000/Login",data).then(res=>{alert(res.data.message),{if(res.data.success){ localStorage('token',res.data.authtoken)},authtoken=(res.data.authtoken),success=(res.data.success),navigate('/userdashboard')});}
  
  return (
    <Layout>

    <div className="signin"> 
      <div className="Ingroup">
        <h3 className="headline">Welcome back</h3>
        <form className="sigin" onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="email">Email Address:</label><br />
          <input type="email" {...register("email",{required:true,minLength:{value:6,message:"min Lenght is 6"}, pattern:{value: /@[A-Za-z]/ ,message:"Required @"} })} className="in-text-in" placeholder='Email address' />
          {errors.email && <div className='err'>{errors.email.message}</div>}
          <label htmlFor="password">Password:</label><br />
          <input type="password" {...register("password",{required:true,minLength:{value:5,message:"Min Length is 6"}})} className="in-text-in" placeholder='Password' />
          {errors.password && <div className='err'>{errors.password.message}</div>}
          <button type='submit' value='Submit' className='filter-btn hbtn flt-grp'>Sign in</button>
          <Link to="#" className="forget link">Forgot your password?</Link>
          <Link to="/signup" className="dont-account link-in">Don't have an account?</Link>
        </form>
        {/* <h3 className="headline3"></h3> */}

      </div>
    </div>
    </Layout>
  )
}

export default Signin
