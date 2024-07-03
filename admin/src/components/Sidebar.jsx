// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({opened}) => {
  return (
    <div className={`min-h-screen bg-[#808080] py-8 text-center overflow-hidden duration-150 ease-in ${!opened ? 'w-0' : 'w-[250px]'}`}>
      <h1 className='font-bold text-2xl text-white'>WaregStore</h1>
      <div className='flex flex-col mt-12 gap-y-4 px-2'>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>dashboard</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>arders</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>Product</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>customers</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>buyer</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium'>account</button>
      </div>
    </div>
    // content start
    // content 
  );
  
};


export default Sidebar;



