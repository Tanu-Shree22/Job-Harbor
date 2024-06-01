import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import Layout from '../components/Layout.jsx';
import Blogs from '../components/blogs.jsx';
function Companyblogs() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
        <Blogs/>
    </div>
      </Layout>
  )
}

export default Companyblogs
