import React, { useEffect, useState } from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const Home = () => {
    const [categoryJob, setCategoryJob] = useState([]);
    useEffect(() => {
        fetch('jobCatagory.json')
            .then(res => res.json())
            .then(data => setCategoryJob(data))
    }, [])
const features = useLoaderData();
// console.log(features);
    // see more btn function
   
    const [isSeeMore, setIsSeeMore] = useState(4);
    const handleSeeMore = () =>{
        setIsSeeMore(isSeeMore + isSeeMore);
    }
    const slice = features.slice(0, isSeeMore);
    return (
        <div className='container mb-40'>
            <div className='flex gap-5 justify-between items-center'>
                <div>
                    <h1 className='font-extrabold text-5xl mb-6'>One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h1>
                    <p className='mb-4'>Explore thousands of job oportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div className='mr-40'>
                    <img className='h-96 w-80' src="https://img.freepik.com/free-photo/businessman_144627-34865.jpg?w=360&t=st=1681060627~exp=1681061227~hmac=c7f67bca38be7ca9ee95f1ec000e3f1f585c3d79dfa4ceaca0067478bb257029" alt="" />
                </div>
            </div>
            <div className='text-center mt-32'>
                <h1 className='font-bold text-3xl text-center mb-4'>Job Category List</h1>
                <p className='mb-8'>Explore thousands of job opportunities all the information you need its your future</p>
                <div className='grid lg:grid-cols-4 gap-8 mr-40'>
                    {
                        categoryJob.map(job => <div className='shadow-xl bg-slate-100 rounded flex flex-col justify-start items-start pl-10 py-4' key={job._id}>
                            
                            <p> <img className='text-center' src={job.picture} alt="" /></p>
                            <p className='py-5'>{job.name}</p>
                            <p className='mb-4'><small>{job.avilable} available job</small></p></div>)
                    }
                </div>
            </div>
           <div>
           <div className='text-center mt-40'>
                <h1 className='font-bold text-3xl text-center mb-4'>Featured Jobs</h1>
                <p className='mb-8'>Explore thousands of job opportunities all the information you need its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    slice.map(jobFeature => <div key={jobFeature.id} className='w-[480px] shadow-2xl mr-40 rounded-xl p-6 ml-6'> 
                    <img src={jobFeature.logo} alt="" />
                    <p className='mt-8'>{jobFeature.title}</p>
                    <p className='my-3'>{jobFeature.companyName}</p>
                    <div className='flex gap-4 text-blue-300 mb-4'>
                        <p className='border border-blue-200 p-1'>{jobFeature.TypeOfJob}</p>
                        <p className='border border-blue-200 p-1'>{jobFeature.jobType}</p>
                    </div>
                    <div className='flex gap-10 mb-4'>
                        <p>{jobFeature.location}</p>
                        <p>{jobFeature.salary}</p>
                    </div>
                    <Link to={`/viewDetails/${jobFeature.id}`}><button className='btn-primary'>View Details</button></Link>
                    </div>
                    )
                }
            </div>
           </div>
           <div className='my-4 flex justify-center items-center mt-6'>
                <button onClick={() => handleSeeMore()} className='btn-primary'>See More</button>
           </div>
        </div>
    );
};

export default Home;