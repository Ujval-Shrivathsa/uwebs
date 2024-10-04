import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import hero from './images/Hero.png';

const HeroPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className='w-full h-[90vh] flex bg-white items-center justify-center px-4 mt-10 md:mt-10'>
      <div className='block'>
        <h1 className='text-center items-center text-black font-semibold font-poppins text-4xl md:text-6xl'>
          Wanna flex your Business?
        </h1>
        <p className='text-center items-center text-black font-medium mt-4 font-poppins text-base md:text-lg'>
          Make a thriller!
        </p>
        <div className='flex items-center justify-center mt-4'>
          <img src={hero} className='bg-blend-darken w-64 md:w-96 md:-skew-y-6' alt="Hero" />
        </div>
        <div className='flex justify-center mt-6'>
          <button 
            className='w-40 h-14 md:w-44 md:h-20 text-center justify-center items-center flex bg-black rounded-xl text-white font-poppins font-medium'
            onClick={() => navigate('/Contact')} // Navigate to the Contact page
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
