import React from 'react'
import {Link} from 'react-router-dom';
import brandicon from '../assets/brand_icon.png';
import './css/Navbar.css';
import axios from 'axios';
import { logout} from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"; 
import {useNavigate} from "react-router-dom";

function Navbar() {
    // console.log({authtoken})
    const buttonstyle = {
        
        backgroundColor:(28,145,242)
        
    };
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {currentUser} = useSelector(state=>state.user);
    function dashnav() {
        console.log("hello")
        if (currentUser.other.profession === "Employer") {
            return "/company/dashboard"
        } else {
            return "/user/dashboard"
        }
    };    
    const Signout = (data) =>  {
        try{
            axios.get("http://localhost:3000/auth/signout",{withCredentials: true})
            .then(res => {
                alert(res.data); 
                dispatch(logout())
                navigate('/');
            })
        }catch{
            console.error("Login error:", error);
            // dispatch(signOutUserFailure(res.data));
        };
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={brandicon} alt="job harbor icon" width="140" height="50"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"  to="_blank">Browser Jobs <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="_blank">Start Hiring <span className="sr-only">(current)</span></Link>
                        </li>
                        {currentUser?(

                        <li className="nav-item active">
                            <Link className="nav-link" to={dashnav()}>Dashboard<span className="sr-only">(current)</span></Link>
                        </li>
                        ):(
                            <></>
                        )

                        }
                        
                    </ul>

                    { 
                    currentUser?(
                        <button id='learn' onClick={Signout}>Sign out</button>        
                        ):(<>
                        <Link className="button-17" to='/signin'>Sign In</Link>
                        <Link className="button-17" style={buttonstyle} to='/signup'>Sign Up</Link>
                        </>
                    )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
