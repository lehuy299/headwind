import React from 'react';
import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';

const TopNavigation = () => {
  return (
    <div className='bg-gray-300 w-full h-16 shadow-lg flex items-center'>
        <FaHashtag size='20' className='text-gray-500 mx-4' />
        <h4 className='text-xl text-gray-500 font-semibold tracking-wider mr-auto'>tailwind-css</h4>
        <FaMoon size='24' className='text-gray-500 mx-4'/>
        <div className='w-1/6 bg-gray-400 h-9 flex items-center px-2 shadow-md'>
            <input type='text' placeholder='Search...' className='bg-transparent outline-none text-gray-500 placeholder-gray-500 font-semibold' />
            <FaSearch size='18' className='' />
        </div>
        <FaRegBell size='24' className='text-gray-500 mx-4' />
        <FaUserCircle size='24' className='text-gray-500 mx-4' />
    </div>
  );
};

export default TopNavigation;