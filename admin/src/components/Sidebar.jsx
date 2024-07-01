// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({opened}) => {
  return (
    <div className={`h-screen bg-gray-500 py-8 text-center overflow-hidden duration-150 ease-in ${!opened ? 'w-0' : 'w-[250px]'}`}>
      <h1 className='font-bold text-2xl text-white'>WaregStore</h1>
      <div className='flex flex-col mt-12 gap-y-4 px-2'>
        <button className='bg-red-500 rounded-md py-2'>Product</button>
        <button className='bg-red-500 rounded-md py-2'>Pengguna</button>
      </div>
    </div>
  );
};

export default Sidebar;
