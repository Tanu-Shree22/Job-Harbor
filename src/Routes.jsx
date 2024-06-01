import React from 'react';

import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import CompanyDashboard from './pages/CompanyDashboard.jsx';
import CreateJob from './pages/CreateJob.jsx';
import CompanyProfile from './pages/CompanyProfile.jsx';
import CompanyApplication from './pages/CompanyApplication.jsx';
import UserProfile from './pages/UserProfile.jsx';
import AppliedJob from './pages/UserAppliedJob.jsx';
import Blogs from './pages/Blogs.jsx';
import PrivateRoute from './auth/PrivateRoute';
import CompanyPvtRoute from './auth/CompanyPvtRoutes.jsx';
import Companyblogs from './pages/Companyblogs.jsx';
import UserSearch from './pages/UserSearch.jsx';
import CompanySearch from './pages/CompanySearch.jsx';
import Pdfviewer from './components/pdfviewer.jsx';
const Router = () => {
    return (
        <BrowserRouter>
            {/* User pvt routes */}
            <Routes>
                <Route path="/user" element={<PrivateRoute/>}>
                <Route path="dashboard" element={<UserDashboard/>}/>
                <Route path="userprofile" element={<UserProfile/>}/>
                <Route path="appliedjob" element={<AppliedJob/>}/>
                <Route path="blogs" element={<Blogs/>}/>
                <Route path="Search" element={<UserSearch/>}/>
                </Route>

                {/* company pvt routes */}
                <Route path="/company" element={<CompanyPvtRoute/>}>
                <Route path="dashboard" element={<CompanyDashboard/>}/>
                <Route path="createjob" element={<CreateJob/>}/>
                <Route path="profile" element={<CompanyProfile/>}/>
                <Route path="applications" element={<CompanyApplication/>}/>
                <Route path="blogs" element={<Companyblogs/>}/>
                <Route path="Search" element={<CompanySearch/>}/>
                </Route>
                {/* <Route path="/*" element={<PrivateRoute Component={Home}/> }/> */}
                <Route path="/*" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/pdfviewer" element={<Pdfviewer/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
