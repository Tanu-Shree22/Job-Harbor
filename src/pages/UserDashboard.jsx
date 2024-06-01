import React from 'react'
import UserDash from '../components/UserDash.jsx';
import './css/Dashboard.css'
import DashSidebar from '../components/DashSidebar.jsx';
import Layout from '../components/Layout.jsx';

function UserDashboard() {
  return (
      <Layout>
    <div className='Cont-Dashboard'>

      <DashSidebar/>
      <UserDash />
    </div>
      </Layout>
  )
}

export default UserDashboard
