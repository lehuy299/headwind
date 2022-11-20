import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white text-white shadow-lg'>
        <SideBarIcon icon={<FaFire size='24' />} />
        <hr className='sidebar-hr'/>
        <SideBarIcon icon={<BsPlus size='24' />} />
        <SideBarIcon icon={<BsFillLightningFill size='24' />} />
        <SideBarIcon icon={<FaPoo size='24' />} />
        <hr className='sidebar-hr'/>
        <SideBarIcon icon={<BsGearFill size='24' />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
);

export default SideBar