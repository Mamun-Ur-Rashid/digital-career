import React, { useState } from 'react';
import { getStorageData } from '../fackDB';
import { Link, useLoaderData } from 'react-router-dom';

const AppledJob = () => {
    const { jobArray } = useLoaderData()
    const [appled, setAppled] = useState(jobArray)
    const [isFilter, setIsFilter] = useState("")
    const handleFilter =(event) => {
        if(event.target.value){
            const filterData = jobArray.filter(data => data.TypeOfJob.some(value => value === "remote"));
            setAppled(filterData);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='flex justify-end items-end'>
                    <h1>Filter by</h1>
                    <div><select name="filter-list" id="filter-list" onChange={handleFilter}>
                        <option value="remote">remote</option>
                        <option value="fulltime">full time</option>
                        </select></div>
                </div>
                {
                    jobArray.map(job => <div className='flex gap-20 border-2 rounded-xl my-6 p-6 ' key={job.id}>
                        <div className='bg-gray-100 flex justify-center items-center'>
                            <img className='bg-gray-100 h-10 p-1 m-4' src={job.logo} alt="" />
                        </div>
                        <div className=''>
                            <p>{job.title}</p>
                            <p className='my-5'> {job.companyName}</p>
                            <div className='flex gap-4'>
                                <p>{job.address}</p>
                                <p>{job.salary}</p>
                            </div>
                        </div>
                        <div className='flex-grow items-center justify-center text-right '>
                            <Link to='/'><button className='btn-primary'>View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );

};

export default AppledJob;