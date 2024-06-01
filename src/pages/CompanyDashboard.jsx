import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import CompanyDash from '../components/CompanyDash.jsx';
import Layout from '../components/Layout.jsx';

function CompanyDashboard() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
      <CompanyDash />
    </div>
      </Layout>
  )
}

export default CompanyDashboard
