import React from 'react'
import './css/Profile.css'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';
function Companyprofile() {
    const { currentUser } = useSelector(state => state.user);
    let str =  currentUser.other.Fname;
    let Fname =str.charAt(0).toUpperCase() + str.slice(1);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm()
    const id = currentUser.other._id
    const API = "http://localhost:3000/user/companyprofileupdate/"
    const onSubmit = (data) => {
        axios({
            method: 'put',
            url: API + id,
            withCredentials: true,
            data: data
        }).then(res => { alert(res.data.message) })
    }
    return (
        <div className='CompDash'>
            <div>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{Fname}</span><span className="text-black-50">{currentUser.other.Email}</span><span> </span></div>
                        </div>
                        <div className="col-md-8 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                </div>
                                <div className="row mt-3">
                                     <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id"  {...register("email", { required: true, minLength: { value: 6, message: "min Lenght is 6" }})}/></div>
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" {...register("tel",{ required: true, minLength: { value: 10, message: "Min Lenght is 10" }, maxLength: { value: 10, message: "Max Lenght is 10" }, pattern: { value: /[0-1]/, message: "Only Numbers" } })}  /></div>
                                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" {...register("ss", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="Address" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label className="labels">Date of Birth</label><input type="date" className="form-control" placeholder="country" /></div>
                                    <div className="col-md-6"><label className="labels">Gender</label>
                                            <select className="form-control" {...register("gender")} >
                                                <option value="Internship">Male</option>
                                                <option value="Full Time">Female</option>
                                                <option value="Part Time">Other</option>
                                            </select></div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })}/></div>
                                    <div className="col-md-12 mt-3"><label className="labels">New Password</label><input type="password" className="form-control" placeholder="password" {...register("password", { required: true, minLength: { value: 6, message: "Min Length is 6" } })} /></div>
                                </div>
                                </form>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Companyprofile
