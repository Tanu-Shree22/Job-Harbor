import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import Layout from '../components/Layout.jsx';
import CompanyApplic from '../components/CompanyApplic.jsx';
function CompanyApplication() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
        <CompanyApplic/>
    </div>
      </Layout>
  )
}

export default CompanyApplication
