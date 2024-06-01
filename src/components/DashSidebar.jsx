import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import './css/DashSidebar.css'
import { IoIosSearch } from "react-icons/io";
function DashSidebar() {
  let location=useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location])
  return (
      <div className="sidebar">
        <div id="mySidenav" className="sidenav">
          {/* <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a> */}
          <Link to="/user/dashboard">Dashboard</Link>
          <Link to="/user/userprofile">Profile</Link>
          <Link to="/user/appliedjob">Job</Link>
          <Link to="/user/blogs">Blog</Link>
          <form className="Search-form-dash">
            <IoIosSearch className='search-icon-dash' />
            <input className="input-Search-dash" type="search" placeholder="Job title, company" aria-label="Search" />
          </form>
          <button id='learn' >Search</button>

        </div>
      </div>
  )
}

export default DashSidebar
