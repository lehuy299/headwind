import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'

const ChannelBar = () => {
  return (
    <div className='w-72 h-screen bg-gray-200 shadow-lg ml-16'>
      <div className='h-16 flex items-center'>
        <h5 className='ml-4 text-lg font-bold text-gray-600'>Channels</h5>
      </div>  
      <Dropdown />
    </div>
  );
};

const Dropdown = () => {
  const [expanded, setExpanded] = useState(true);
  return <div>
    <div className='flex items-center p-2'>
      <ChevronIcon />
      <h5 className='text-blue-500 text-lg font-bold ml-1'>Topics</h5>
    </div>
  </div>
};

const ChevronIcon = ({ expand }) => {
  return (
    <FaChevronDown size='14' className='text-gray-500' />
  );
};

export default ChannelBar;