import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToDB } from '../fackDB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewDetails = () => {
    const [data, setData] = useState([])
    const params = useParams()
    const jobFeatures = useLoaderData();

    useEffect(() => {
        if (jobFeatures) {
            const findFeature = jobFeatures.find(feature => feature.id == params.id);
            setData(findFeature)
        }

    }, [params.id])
    // console.log(data)
    const handleApplyToJob = (id) => {
        AddToDB(id);
        // console.log(id);
    }
    return (
        <div className='container grid grid-cols-12 gap-14'>
            <div className='col-span-8 p-10'>
                <p>Job Description: <br />{data.jobDescription}</p>
                <p className='my-5 pr-16'>Job Responsibility: <br />{data.jobResponsibility} </p>
                <p>Educational Requirements: <br />{data.educationalRequirement}</p>
                <p className='my-6'>Experiences: <br /> {data.experience}</p>
            </div>
            <div className='col-span-4 bg-blue-100 rounded-2xl p-10'>
                <h1 className='my-4 divide-y '>Job Details <br /> <hr /></h1>
                <p className='inline-flex gap-2'><span><img src="/public/Frame.png" alt="" /></span> Salary: {data.salary}</p>
                <p className='my-4 inline-flex gap-2'><span><img src="/public/Frame-1.png" alt="" /></span> Job Title: {data.title}</p>
                <h3 className='mb-4'>Contact Information <br /> <hr /></h3>
                <p className='inline-flex gap-2'><span><img src="/public/Frame-2.png" alt="" /></span> Phone: {data.phone}</p>
                <p className='inline-flex gap-2'><span><img src="/public/Frame-3.png" alt="" /></span> Email: {data.email}</p>
                <p className='mb-5 inline-flex gap-2'><span><img src="/public/Frame-4.png" alt="" /></span> Address: {data.address}</p>
                <button onClick={() => handleApplyToJob(data.id)} className='btn-primary'>Apply Now</button>
            </div>
        </div>
    );
};

export default ViewDetails;