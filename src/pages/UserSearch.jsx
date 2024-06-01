import React from 'react'
import './css/Dashboard.css'
import DashSidebar from '../components/DashSidebar.jsx';
import Layout from '../components/Layout.jsx';
import Search from '../components/Search.jsx';

function UserProfile() {
  return (
      <Layout>
    <div className='Cont-Dashboard'>

      <DashSidebar/>
      <Search />
    </div>
      </Layout>
  )
}

export default UserProfile;
