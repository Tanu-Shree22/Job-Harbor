import React from 'react'
import DashSidebar from '../components/DashSidebar.jsx';
import './css/CompanyDashboard.css'
import Layout from '../components/Layout.jsx';
import Blogs from '../components/blogs.jsx';
function UserAppliedJob() {
  return (
    <Layout>
    <div className='companydashboard'>

      <DashSidebar className="dashside"/>
        <Blogs/>
    </div>
      </Layout>
  )
}

export default UserAppliedJob
