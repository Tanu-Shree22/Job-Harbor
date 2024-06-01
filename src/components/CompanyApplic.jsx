import './css/CompanyDash.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment'
import { Link } from 'react-router-dom';
function CompanyApplic() {
  const {currentUser} = useSelector(state=>state.user);
  const API = 'http://localhost:3000/user/companyapplicationfetch/'
  const [Application,setApplication]=useState([]);
  const id=currentUser.other._id
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
  function PdfViewer(ResumeId) {
      return window.open(ResumeId, '_blank');
    };

  return (
    <div className='CompDash'>
      <h2 className='co-dash-heading'>Job Applications</h2>

      <br />

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Education</th>
              <th scope="col">Experience</th>
              <th scope="col">TechinicalSkill</th>
              <th scope="col">SoftSkill</th>
              <th scope="col">Resume</th>
      
            </tr>
          </thead>
          <tbody>
          {
                Job.map((curApplication)=>{
                  const {_id,Fname,Lname,Education,Experience,Gender,TechinicalSkill,SoftSkill,Email,ResumeId}=curApplication;
                  return (
                      <tr key={_id}>
                          <td scope="col">{Fname+" "+Lname}</td>
                          <td scope="col">{Email}</td>
                          <td scope="col">{Gender}</td>
                          <td scope="col">{Education}</td>
                          <td scope="col">{Experience}</td>
                          <td scope="col">{TechinicalSkill}</td>
                          <td scope="col">{SoftSkill}</td>
                          <td scope="col"><button className='btn' onClick={()=>PdfViewer(ResumeId)}>Open PDF</button></td>
                          {/* <td scope="col">{moment({Lastdate}).format('MMM Do YY')}</td> */}
                          {/* {() => apply(_id,CompanyId)}  */}
                      </tr>
                  )
              })
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyApplic;
