import React from 'react';

const JobPosting = ({ job }) => (
  <div className="job-posting">
    <h3>{job.Product}</h3>
    <p>Location: {job.Location}</p>
    <p>Applicants: {job.Applicants}</p>
    <p>Views: {job.Views}</p>
    <p>Posted on: {job.PostDate}</p>
    <p>Closed on: {job.CloseDate || 'Open'}</p>
    <p>Status: {job.Status}</p>
    <button>View Details</button>
  </div>
);

export default JobPosting;