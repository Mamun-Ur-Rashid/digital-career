import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-14 mx-40'>
            <div className='text-3xl font-bold'> <Link to='/'>Digital Career Hub</Link></div>
            <div>
                <NavLink className='mr-5' to='/'>Home</NavLink>
                <NavLink className='mr-5'  to='/statistic'>Statistics</NavLink>
                <NavLink className='mr-5' to='/appled'>Appled Job</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
            <button className='btn-primary'>Start Applying</button>
        </div>
    );
};

export default Header;