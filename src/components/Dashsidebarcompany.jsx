import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './css/DashSidebar.css'
import { IoIosSearch } from "react-icons/io";
function DashSidebar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])
  return (
    <div className="sidebar">
      <div id="mySidenav" className="sidenav">
        {/* <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a> */}
        <Link className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}} to="/company/dashboard">Dashboard</Link>
        <Link  className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}} to="/company/createjob">Create a Job</Link>
        <Link  className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}} to="/company/applications">Application</Link>
        <Link  className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}} to="/company/profile">Profile</Link>
        {/* <Link  className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}}to="/company/managejob">Manage Job</Link> */}
        <Link  className={(e)=>{return e.isAction?"Activelinksytle":"unActive"}} to="/company/blogs">Blogs</Link>
        <form className="Search-form-dash">
          <IoIosSearch className='search-icon-dash' />
          <input className="input-Search-dash" type="search" placeholder="Job title, company" aria-label="Search" />
        </form>
        <button id='learn' >Search</button>

      </div>
    </div>

    // <div>
    //   <div className="b-example-divider"></div>

    //   <div className="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    //     <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
    //       <svg className="bi" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
    //       <span className="visually-hidden">Icon-only</span>
    //     </a>
    //     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
    //       <li className="nav-item">
    //         <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg className="bi" width="24" height="24" role="img" aria-label="Home"><use xlink:href="#home" /></svg>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"><use xlink:href="#speedometer2" /></svg>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg className="bi" width="24" height="24" role="img" aria-label="Orders"><use xlink:href="#table" /></svg>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg className="bi" width="24" height="24" role="img" aria-label="Products"><use xlink:href="#grid" /></svg>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use xlink:href="#people-circle" /></svg>
    //         </a>
    //       </li>
    //     </ul>
    //     <div className="dropdown border-top">
    //       <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
    //         <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
    //       </a>
    //       <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
    //         <li><a className="dropdown-item" href="#">New project...</a></li>
    //         <li><a className="dropdown-item" href="#">Settings</a></li>
    //         <li><a className="dropdown-item" href="#">Profile</a></li>
    //         <li><hr className="dropdown-divider"/></li>
    //         <li><a className="dropdown-item" href="#">Sign out</a></li>
    //       </ul>
    //     </div>
    //   </div>

    // </div>
  )
}

export default DashSidebar
