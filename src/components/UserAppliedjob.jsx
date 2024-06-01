import React , { useEffect, useState }from 'react'
import './css/Profile.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment'

function UserAppliedjob() {
  const {currentUser} = useSelector(state=>state.user);

  const API = 'http://localhost:3000/user/jobdata/userjobdata';
  const [Job, setJob] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(API, { withCredentials: true });
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

    fetchApplication();
  }, []);

  const id =currentUser.other._id;
  let jobapply=false;

  async function apply (comId,CompanyId){

  const API="http://localhost:3000/user/jobapply/";
  const applydata={
    jobid:comId,
    companyid:CompanyId
  }
  const response= await axios.post(API+id,applydata,{withCredentials: true});
  if(response.data.message==="Successfully"){
    jobapply=true;
    alert("Job Applied Successs ")
  }
  else{
    jobapply=false
    alert(response.data.message)
  }
}

    return (
        <div className='CompDash'>
            <h2 className='co-dash-heading'>Job </h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Postition Title</th>
      <th scope="col">Employment Type</th>
      <th scope="col">Work Location</th>
      <th scope="col">Responsibilities</th>
      <th scope="col">Location</th>
      <th scope="col">Vacancy</th>
      <th scope="col">Join date</th>
      <th scope="col">Post date</th>
      <th scope="col">Close date</th>
    </tr>
  </thead>
  <tbody>
              {
                Job.map((curApplication)=>{
                  const {_id,WorkLocation,CompanyId,Employmenttype,Responsibilities,PositionTitle,Location,Vacancy,Join,Lastdate,Postdate}=curApplication;
                  return (
                      <tr key={_id}>
                          <td scope="col">{PositionTitle}</td>
                          <td scope="col">{Employmenttype}</td>
                          <td scope="col">{WorkLocation}</td>
                          <td scope="col">{Responsibilities}</td>
                          <td scope="col">{Location}</td>
                          <td scope="col">{Vacancy}</td>
                          <td scope="col">{moment({Join}).format('MMM Do YY')}</td>
                          <td scope="col">{moment({Postdate}).format('MMM Do YY')}</td>
                          <td scope="col">{moment({Lastdate}).format('MMM Do YY')}</td>
                          <td scope="col"><button onClick={() => apply(_id,CompanyId)} className='btn'>{(!jobapply)? ("Apply"):("Applied")}</button></td>
                      </tr>
                  )
              })
              }
    </tbody>
    </table>
            </div>
  )
}

export default UserAppliedjob;
