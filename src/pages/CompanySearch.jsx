import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import Layout from '../components/Layout.jsx';
import Search from '../components/Search.jsx';
function CompanyProfile() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
        <Search/>
    </div>
      </Layout>
  )
}

export default CompanyProfile
