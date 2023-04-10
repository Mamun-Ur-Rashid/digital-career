// import React from 'react';
// import { getStorageData } from '../fackDB';
// import { Link, useLoaderData } from 'react-router-dom';

// const AppledJob = () => {
//     const { jobArray } = useLoaderData()
//     return (
//         <div className='container'>
//             {
//                 jobArray.map(job => <div className='flex gap-20 border-2 rounded-xl my-6 p-6 ' key={job.id}>
//                     <div className='bg-gray-100 flex justify-center items-center'>
//                         <img className='bg-gray-100 h-10 p-1 m-4' src={job.logo} alt="" />
//                     </div>
//                     <div className=''>
//                         <p>{job.title}</p>
//                         <p className='my-5'> {job.companyName}</p>
//                         <div className='flex gap-4'>
//                             <p>{job.address}</p>
//                             <p>{job.salary}</p>
//                         </div>
//                     </div>
//                     <div className='flex-grow items-center justify-center text-right '>
//                         <Link to='/'><button className='btn-primary'>View Details</button></Link>
//                     </div>
//                 </div>)
//             }
//         </div>
//     );

// };

// export default AppledJob;