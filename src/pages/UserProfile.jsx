import React from 'react'
import './css/Dashboard.css'
import DashSidebar from '../components/DashSidebar.jsx';
import Userprofile from '../components/Userprofile.jsx';
import Layout from '../components/Layout.jsx';

function UserProfile() {
  return (
      <Layout>
    <div className='Cont-Dashboard'>

      <DashSidebar/>
      <Userprofile />
    </div>
      </Layout>
  )
}

export default UserProfile;
