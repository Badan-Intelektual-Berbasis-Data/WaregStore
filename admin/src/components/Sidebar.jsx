// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({opened}) => {

  const navigate = useNavigate()

  return (
    <div className={`min-h-screen bg-[#808080] py-8 text-center overflow-hidden duration-150 ease-in ${!opened ? 'w-0' : 'w-[250px]'}`}>
      <h1 className='font-bold text-2xl text-white'>WaregStore</h1>
      <div className='flex flex-col mt-12 gap-y-4 px-2'>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium' onClick={() => navigate("/")}>Dashboard</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium' onClick={() => navigate("product")}>Product</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium' onClick={() => navigate("Buyer")}>buyer</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium' onClick={() => navigate("login")}>Login</button>
        <button className='bg-[#D9D9D9] rounded-md py-2 font-medium' onClick={() => navigate("Profile")}>Profile</button>
      </div>
      <div className='mt-12'>
        <button className='w-48 bg-[#E84545] text-white rounded-md px-2 py-2 font-medium mt-80'>Log Out</button>
      </div>
    </div>
    
    // content start
    // content 
  );
  
};


export default Sidebar;



