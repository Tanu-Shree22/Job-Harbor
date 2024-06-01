import React from 'react'
import './css/CompanyDash.css'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

//   function jobcreate(){

//     return axios({
//       method: 'post',
//       url: 'http://localhost:3000/user/JobPosting/661a3cce6d3e4a5732b5eccf',
//       headers: {'Cookie': 'foobar'},
//       data: Data}).then(res => { alert(res.data.message) })
// };

function Createjob() {
    const { currentUser } = useSelector(state => state.user);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm()
    const id = currentUser.other._id
    const API = "http://localhost:3000/user/JobPosting/"
    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: API + id,
            withCredentials: true,
            data: data
        }).then(res => { alert(res.data.message) })
    }

    return (
        <div className='CompDash'>
            {/* <h4 className='co-dash-heading'>Create a Job</h4> */}
            <div>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 border-right border-left">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Create a Job</h4>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Title</label><input type="text" className="form-control mb-3" placeholder="Title" {...register("positiontitle", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Requirments</label><input type="text" className="form-control mb-3" placeholder="Ex- mern and java or advance concept"  {...register("requirments", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Responsibility</label><input type="text" className="form-control mb-3" placeholder="Ex- Team Leading"  {...register("responsibilities", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Location</label><input type="text" className="form-control mb-3" placeholder="Enter Address Company"  {...register("loc", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Salary</label><input type="number" className="form-control mb-3" placeholder="Ex- 80000"   {...register("salary", { required: true, minLength: { value: 2, message: "Min Lenght is 10" }, maxLength: { value: 10, message: "Max Lenght is 10" }, pattern: { value: /[0-1]/, message: "Only Numbers" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Join Date</label><input type="date" className="form-control mb-3" placeholder=""  {...register("join", { valueAsDate: true, })} /></div>
                                        <div className="col-md-12"><label className="labels">Vacancy</label><input type="number" className="form-control mb-3" placeholder="Ex- 20"  {...register("vacancy", { required: true, minLength: { value: 1, message: "Min Lenght is 10" }, pattern: { value: /[0-1]/, message: "Only Numbers" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Last Date</label><input type="date" className="form-control mb-3" placeholder=""  {...register("lastdate", { valueAsDate: true, })} /></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="labels">Work Location</label>
                                            <select className="form-control" {...register("workloaction")}>
                                                <option value="On-Site">On-Site</option>
                                                <option value="Remote">Remote</option>
                                                <option value="On-Site or Remote">On-Site or Remote</option>
                                            </select> </div>
                                        <div className="col-md-6"><label className="labels">Employment type</label>
                                            <select className="form-control" {...register("employmenttype")}>
                                                <option value="Internship">Internship</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                                <option value="Freelance">Freelance</option>
                                            </select></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6"> <label className="labels">Country</label> <input type="text" className="form-control" placeholder="country"  {...register("country", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /> </div>
                                        <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="state" {...register("state", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                    </div>
                                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" value="Submit" type="submit">Save Job</button></div>
                                    {/* <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="reset">Reset</button></div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createjob
