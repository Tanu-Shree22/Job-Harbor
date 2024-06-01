import React from 'react'
import Dashsidebarcompany from '../components/Dashsidebarcompany.jsx';
import './css/CompanyDashboard.css'
import Createjob from '../components/Createjob.jsx';
import Layout from '../components/Layout.jsx';

function CreateJob() {
  return (
      <Layout>
    <div className='companydashboard'>

      <Dashsidebarcompany className="dashside"/>
      <Createjob />
    </div>
      </Layout>
  )
}

export default CreateJob
