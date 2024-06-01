// import {React , useContext} from 'react';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { feat } from '../assets/Featuredata.json';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import './css/UserDashboard.css';
import moment from 'moment'
import { useSelector } from 'react-redux';


function UserDashboard() {
  let date = new Date();
  let hour = date.getHours();
  const { currentUser } = useSelector(state => state.user);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  let str = currentUser.other.Fname;
  let Fname = str.charAt(0).toUpperCase() + str.slice(1);

  let greeting;
  if (hour < 5) {
    greeting = "Hey Good Evening ";
  } else if (hour < 12) {
    greeting = "Hey Good Morning ";
  } else if (hour < 17) {
    greeting = "Hey Good Afternoon ";
  } else {
    greeting = "Hey Good Evening ";
  }
  const API = "http://localhost:3000/user/userappledfetch/";
  const id = currentUser.other._id;
  const [Job, setJob] = useState([]);

  useEffect(() => {
    const fetchjobdata = async () => {
      try {
        const response = await axios.get(API + id, { withCredentials: true });
        if (response.data.message) {
          alert(response.data.message);
        }
        if (response.data.length > 0) {
          setJob(response.data);
        }
      } catch (error) {
        console.error('Error fetching application:', error);
        alert('Error fetching application. Please try again later.');
      }
    };

    fetchjobdata();
  }, []);


  return (

    <div className="dash-cont">

      <div className="dashview">
        <div className="intro">
          {/* {hour < 12 ? "Good Morning" : "Good evening"} */}
          <h1>{[greeting, Fname]}</h1>
        </div>
        <div className="btn">

          <button className='btn-post'>New Job</button>
          {/* <button id='learn' onClick={() => setLoginUser({})}>Sign out</button> */}
        </div>
        <div className="suggestion">
          <h3 className="headline">Job suggestions based on your profile</h3>
          <div className="sugge-cont">
            <Slider {...settings}>
              {feat.map((d, idx) => (
                <div className='card-profile' key={idx}>
                  <div className='feat-cont-img'>
                    <img className='feat-img' src={d.src} key={idx} alt={d.alt} />
                  </div>
                  <div className='profile-card-text'>
                    <dl className='profile-card-text'>
                      <dt>{d.post}</dt>
                      <dd>{d.company}</dd>
                    </dl>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="application-data">
          <h3 className="headline">Your Application</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Compnay Name</th>
                <th scope="col">Title</th>
                <th scope="col">Employment Type</th>
                <th scope="col">Work Location</th>
                <th scope="col">Responsibility</th>
                <th scope="col">Location</th>
                <th scope="col">Join date</th>
                <th scope="col">Close date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                Job.map((curApplication) => {
                  const { _id, WorkLocation, Company, Employmenttype, Responsibilities, PositionTitle, Location, Vacancy, Join, Lastdate, Postdate } = curApplication;
                  return (
                    <tr key={_id}>
                      <td scope="col">{Company}</td>
                      <td scope="col">{PositionTitle}</td>
                      <td scope="col">{Employmenttype}</td>
                      <td scope="col">{WorkLocation}</td>
                      <td scope="col">{Responsibilities}</td>
                      <td scope="col">{Location}</td>
                      <td scope="col">{moment({ Join }).format('MMM Do YY')}</td>
                      <td scope="col">{moment({ Lastdate }).format('MMM Do YY')}</td>
                      <td scope="col">Applied</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default UserDashboard
