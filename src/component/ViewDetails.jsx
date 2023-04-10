import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToDB } from '../fackDB';

const ViewDetails = () => {
    const [data, setData] = useState([])
    const params = useParams()
    // console.log(params.id)
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
                <p>Job Description: {data.jobDescription}</p>
                <p className='my-5 pr-16'>Job Responsibility: {data.jobResponsibility} </p>
                <p>Educational Requirements: {data.educationalRequirement}</p>
                <p className='my-6'>Experiences: {data.experience}</p>
            </div>
            <div className='col-span-4 bg-blue-100 rounded-2xl p-10'>
                <h1 className='my-4'>Job Details</h1>
                <p>Salary: {data.salary}</p>
                <p className='my-4'>Job Title: {data.title}</p>
                <h3 className='mb-4'>Contact Information</h3>
                <p className='mb-5'>Address: {data.address}</p>
                <button onClick={() => handleApplyToJob(data.id)} className='btn-primary'>Apply Now</button>
            </div>
        </div>
    );
};

export default ViewDetails;