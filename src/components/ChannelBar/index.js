import React, { useState } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { BsHash } from 'react-icons/bs';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = () => {
  return (
    <div className='w-72 h-screen bg-gray-200 shadow-lg ml-16'>
      <div className='h-16 flex items-center'>
        <h5 className='ml-4 text-lg font-bold text-gray-600'>Channels</h5>
      </div>
      <div className='p-2'>
        <Dropdown header='Topics' selections={topics} />
        <Dropdown header='Questions' selections={questions} />  
        <Dropdown header='Random' selections={random} />    
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);
  return <div className='flex flex-col mb-2' onClick={() => setExpanded(!expanded)}>
    <div className='flex items-center cursor-pointer'>
      <ChevronIcon expanded={expanded} />
      <h5 className={`${expanded ? 'text-blue-500' : 'text-gray-500'} text-lg font-bold ml-1`}>{header}</h5>
      <FaPlus size={12} className='text-gray-500 ml-auto' />
    </div>
    {expanded && selections && selections.map((selection) => (
        <div className='flex items-center mt-1 ml-2'>
          <BsHash className='text-gray-400'/>
          <h5 className='font-semibold text-gray-500'>{selection}</h5> 
        </div>
    ))}
  </div>
};

const ChevronIcon = ({ expanded }) => {
  return (
    <>
      {expanded 
        ? <FaChevronDown size='14' className='text-gray-500' /> 
        : <FaChevronRight size='14' className='text-gray-500' />}
    </>
  );
};

export default ChannelBar;