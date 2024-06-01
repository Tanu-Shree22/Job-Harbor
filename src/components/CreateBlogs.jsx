import react, { useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux'
;
export default function CreateBlogs() {
    const [file, setfile] = useState('');
    const [photoid, setphotoid] = useState('');
    const [imagename, setimagename] = useState('');
    const { currentUser } = useSelector(state => state.user);
    const API = 'http://localhost:3000/user/createblogs/'
    const id = currentUser.other._id

    let APIphoto = 'http://localhost:3000/user/imageupload/';

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }
        else {
            const imagedata = new FormData();
            imagedata.append('file', file);
            try {
                const response = await axios({
                    method: 'post',
                    url: APIphoto + id,
                    withCredentials: true,
                    data: imagedata
                }).then(res => { alert(res.data.message), setphotoid(res.data.blogid) ,setimagename(res.data.imagepath)});

            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Failed to upload file. Please try again.');
            }
        }
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm()


    const onSubmit = (data) => {
        axios({
            method: 'put',
            url: API + id,
            withCredentials: true,
            data: { ...data, photoid } 
        }).then(res => { alert(res.data.message)})
    }
    let photopath='../BlogsPhoto/'
    return (
        <div className="card mb-4">
            <div className="card-header">Create Blogs</div>
            <div className="card-body">
                <a href="#!"><img className="card-img-top" src='../BlogsPhoto/661a3cce6d3e4a5732b5eccf1713797504022.jpg'  /></a>
                {/* <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                <div className="col-md-16"><label className="labels mt-2">Photo</label><input type="file" onChange={(e) => setfile(e.target.files[0])} className="form-control mb-3" placeholder="Title" /></div>
                <button className='btn' type='submit' onClick={handleUpload} >Upload</button>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="col-md-16"><label className="labels">Title</label><input type="text" className="form-control mb-3" placeholder="Title"{...register("posttitle", { required: true, minLength: { value: 2, message: "Min Lenght is 2" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                    <div className="col-md-16"><label className="labels">Description</label><textarea rows="4" cols="50" className="form-control mb-3" placeholder="Ex- mern and java or advance concept" {...register("description", { required: true, minLength: { value: 20, message: "Min Lenght is 20" }, pattern: { value: /[A-Za-z]/, message: "Only Alphabet" } })} /></div>
                    <button className="btn btn-primary mb-3" id="button-search" type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
}