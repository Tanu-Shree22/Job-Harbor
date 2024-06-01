import React, { useState } from 'react';
import JobPosting from './JobList';

const JobList = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const jobPostings = [
    // ... (the job postings provided in the context)
  ];

  const filteredJobPostings = statusFilter === 'All' ? jobPostings : jobPostings.filter(job => job.Status === statusFilter);

  return (
    <div className="job-postings">
      <h2>Job Postings</h2>
      <div className="filter">
        <label htmlFor="status-filter">Filter by status:</label>
        <select id="status-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className="job-list">
        {filteredJobPostings.map(job => (
          <JobPosting key={job.Product} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;