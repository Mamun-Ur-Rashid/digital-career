import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStorageData } from '../fackDB';

const AppledJob = () => {
  const jobArray = useLoaderData()
  console.log(jobArray)
  const [appled, setAppled] = useState([]);
  const [isFilter, setIsFilter] = useState("");

  useEffect(() => {
    const jobData = jobArray;
    setAppled(jobData);
  }, []);

  const handleFilter = (event) => {
    setIsFilter(event.target.value);
    if (event.target.value) {
      const filterData = jobArray.filter(data => data.TypeOfJob.some(value => value === event.target.value));
      setAppled(filterData);
    } else {
      setAppled(jobData);
    }
  }

  return (
    <div>
      <div className='navbar'>
        <h1 className='text-center font-bold text-2xl'>Applied Jobs</h1>
        <img className=' w h-28 top-0 right-0' src="https://i.ibb.co/4FkDTYT/Vector.png" alt="" />
      </div>
      <div className='container'>
        <div className='flex justify-end items-end'>
          <h1>Filter by</h1>
          <div>
            <select name="filter-list" id="filter-list" value={isFilter} onChange={handleFilter}>
              <option value="">All</option>
              <option value="remote">remote</option>
              <option value="fulltime">full time</option>
            </select>
          </div>
        </div>
        {appled.map(job => (
          <div className='flex gap-20 border-2 rounded-xl my-6 p-6' key={job.id}>
            <div className='bg-gray-100 flex justify-center items-center'>
              <img className='bg-gray-100 h-10 p-1 m-4' src={job.logo} alt="" />
            </div>
            <div className=''>
              <p>{job.title}</p>
              <p className='my-5'>{job.companyName}</p>
              <div className='flex gap-4'>
                <p>{job.address}</p>
                <p>{job.salary}</p>
              </div>
            </div>
            <div className='flex-grow items-center justify-center text-right'>
              <Link to='/'><button className='btn-primary'>View Details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppledJob;
