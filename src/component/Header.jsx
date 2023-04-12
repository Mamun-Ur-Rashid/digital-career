import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar relative'>
            <div><img className='absolute w h-28 top-0 right-0' src="/public/Vector-1.png" alt="" /></div>
            <nav className='flex justify-between items-center sm:px-3 h-[200px] mx-40'>
                <Link to='/'> <div className='md:mr-20'>
                    <h1 className='text-3xl font-bold'>Digital Career</h1>
                </div></Link>
                <div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[60%] md:w-auto px-5'>
                    <ul className='flex md:flex-row flex-col md:items-center gap-[4vw] text-xl'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistic'>Statistics</NavLink></li>
                        <li><NavLink to='/appled'>Applied Job</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div className=''>
                    <button className='btn-primary'>Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;