import React from 'react';

const Home = () => {
    return (
        <div className=' container flex gap-5 justify-between items-center'>
            <div>
                <h1 className='font-extrabold text-5xl mb-6'>One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h1>
                <p className='mb-4'>Explore thousands of job oportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn-primary'>Get Started</button>
            </div>
            <div className='mr-40'>
                <img className='h-96 w-80' src="https://img.freepik.com/free-photo/businessman_144627-34865.jpg?w=360&t=st=1681060627~exp=1681061227~hmac=c7f67bca38be7ca9ee95f1ec000e3f1f585c3d79dfa4ceaca0067478bb257029" alt="" />
            </div>
        </div>
    );
};

export default Home;