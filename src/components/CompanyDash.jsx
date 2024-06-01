import React , { useEffect, useState }from 'react'
import './css/CompanyDash.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment'

function CompanyDashboard() {
  const {currentUser} = useSelector(state=>state.user);
  const API = 'http://localhost:3000/user/company/jobdata/'
  const [Application,setApplication]=useState([]);
  const id=currentUser.other._id
    useEffect(() => {
      const fetchApplication = async () => {
        try {
          const response = await axios.get(API + id, { withCredentials: true });
          if (response.data.message) {
            alert(response.data.message);
          }
          // const Jobdata = await response.json();
          if (response.data.length > 0) {
            setApplication(response.data);
          }
          // console.log(response.data);
        } catch (error) {
          console.error('Error fetching application:', error);
          alert('Error fetching application. Please try again later.');
        }
      };
      fetchApplication();
    }, []); 
 
    async function jobstatus(jobid){
      const API="http://localhost:3000/user/jobstatus/";
      const response = await axios.get(API+jobid,{withCredentials: true});
      if(response.data.status ==="Active"){
        alert("Active")
      }
      else{
        alert("Closed")
      }
    }

  
  return (
    <div className='CompDash'>
      <h2 className='co-dash-heading'>Job Postings</h2>
      <div className='dashnav'>
        <nav className='co-dash-nav'>
          <Link to="#" className="co-dash-navbar-link">All</Link>
          <Link to="#" className="co-dash-navbar-link">Active</Link>
          <Link to="#" className="co-dash-navbar-link">Closed</Link>
        </nav>
      </div>
          <br />
      <div>
      {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
      <th scope="col">Applicants</th>
      <th scope="col">Post date</th>
      <th scope="col">Close date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
</table> */}
 <table className="table">
          <thead>
            <tr>
              <th scope="col">Job Postition</th>
              <th scope="col">Employment Type</th>
              <th scope="col">Work Location</th>
              <th scope="col">Responsibility</th>
              <th scope="col">Location</th>
              <th scope="col">Vacancy</th>
              <th scope="col">Last Date</th>
              <th scope="col">Join</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
              {
                Application.map((curApplication)=>{
                  const {_id,WorkLocation,JobStatus,Employmenttype,Responsibilities,PositionTitle,Location,Vacancy,Join,Lastdate,Status,Oprations}=curApplication;
                  return (
                      <tr key={_id}>
                          <td>{PositionTitle}</td>
                          <td>{Employmenttype}</td>
                          <td>{WorkLocation}</td>
                          <td>{Responsibilities}</td>
                          <td>{Location}</td>
                          <td>{Vacancy}</td>
                          <td>{moment({Lastdate}).format('MMM Do YY')}</td>
                          <td>{moment({Join}).format('MMM Do YY')}</td>
                          <td><button type='button' onClick={() =>jobstatus(_id)} className='btn'>{(JobStatus)? ("Active"):("Closed")}</button></td>
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

export default CompanyDashboard
