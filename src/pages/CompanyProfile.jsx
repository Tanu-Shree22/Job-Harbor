import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import Layout from '../components/Layout.jsx';
import Companyprofile from '../components/Companyprofile.jsx';
function CompanyProfile() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
        <Companyprofile/>
    </div>
      </Layout>
  )
}

export default CompanyProfile
