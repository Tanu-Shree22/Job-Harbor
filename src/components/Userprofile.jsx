import React, { useState }  from 'react'
import './css/Profile.css'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';

function Userprofile() {

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
    const API = "http://localhost:3000/user/Userprofileupdate/"
    const uploadApi='http://localhost:3000/user/resume/'
    const onSubmit = (data) => {
        axios({
            method: 'put',
            url: API + id,
            withCredentials: true,
            data: data
        }).then(res => { alert(res.data.message) })
    }
    
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        try {
                const response = await axios({
                    method: 'post',
                    url: uploadApi+id,
                    withCredentials: true,
                    data: formData
                }).then(res=>{alert(res.data.message)});
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file. Please try again.');
        }
    };
    return (
        <div className='CompDash'>
            <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{Fname}</span><span className="text-black-50">{currentUser.other.Email}</span><span> </span></div>
                            <div className="col-md-12"><label className="labels">Resume</label><input type="file" accept='.pdf' className="form-control" placeholder="resume" onChange={handleFileChange} /></div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={handleUpload} type="button">Upload</button></div>
                        </div>
                            <div className="col-md-5 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Profile Settings</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" {...register("fname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" {...register("lname", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} placeholder="surname" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"  {...register("tel",{ required: true, minLength: { value: 10, message: "Min Lenght is 10" }, maxLength: { value: 10, message: "Max Lenght is 10" }, pattern: { value: /[0-1]/, message: "Only Numbers" } })}  /></div>
                                        <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address line 1" {...register("address", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" {...register("email", { required: true, minLength: { value: 6, message: "min Lenght is 6" }})} /></div>
                                        <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" {...register("education", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6"><label className="labels">Date of Birth</label><input type="date" className="form-control" placeholder="country" {...register("dob", { valueAsDate: true, })}/></div>
                                        <div className="col-md-6"><label className="labels">Gender</label>
                                            <select className="form-control" {...register("gender")}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select></div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" {...register("country", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                        <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" {...register("state", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} placeholder="state" /></div>
                                        <div className="col-md-12 mt-3"><label className="labels">New Password</label><input type="password" className="form-control" placeholder="password" {...register("password", { required: true, minLength: { value: 6, message: "Min Length is 6" } })} /></div>
                                    </div>
                                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                                    <div className="col-md-12"><label className="labels">Experience</label><input type="text" className="form-control" placeholder="experience" {...register("experience", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div> <br />
                                    <div className="col-md-12"><label className="labels"></label>Techinical Skills<input type="text" className="form-control" placeholder="additional details" {...register("techinicalskills", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                    <div className="col-md-12"><label className="labels">Soft Skills</label><input type="text" className="form-control" placeholder="additional details" {...register("softskills", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                    <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" {...register("additionalskills", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                                </div>
                            </div>
                    </div>
                </div>
                        </form>
            </div>
        </div>
    )
}

export default Userprofile
