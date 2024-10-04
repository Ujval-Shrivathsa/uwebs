import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Contact = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center h-auto md:h-[90vh] bg-black p-6'>
      <div className='text-center md:text-left'>
        <p className='text-white font-poppins text-4xl md:text-6xl'>Let us work together</p>
        <div className='mt-10 space-y-6 md:space-y-0 md:space-x-10'>
          <button className='w-full md:w-80 h-16 md:h-20 rounded-full bg-white font-poppins'>
            connectwithujval@gmail.com
          </button>
        </div>
      </div>
      <div className='mt-10 md:mt-0 md:ml-48 text-center md:text-left'>
        <button 
          className='w-44 h-14 md:h-20 rounded-full bg-zinc-200 font-poppins'
          onClick={() => navigate('/Contact')} // Navigate to the Contact page
        >
          Contact us today
        </button>
        <p className='text-white font-poppins text-sm mt-6 md:mt-10'>
          Let's get your journey started!
        </p>
      </div>
    </div>
  );
}

export default Contact;
