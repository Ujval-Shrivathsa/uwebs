import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import walking from './images/Pic.png';

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className='w-full h-auto min-h-[90vh] bg-black flex flex-col md:flex-row justify-center items-center p-4 md:p-8'>
      {/* Text Section */}
      <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <p className='text-white font-poppins font-light max-w-xs sm:max-w-md md:max-w-lg'>
          I create simple, yet visually stunning websites that combine creativity with top-notch UI/UX design. Every website I build is optimized to deliver a seamless user experience, ensuring that your brand not only looks impressive but also functions effortlessly.
        </p>
        <button 
          className='w-48 h-14 sm:w-60 sm:h-20 bg-white font-poppins font-medium rounded-lg mt-6 md:mt-20'
          onClick={() => navigate('/Contact')} // Navigate to the Contact page
        >
          Get started today
        </button>
      </div>
      
      {/* Image Section */}
      <div className='hidden md:flex mt-8 md:mt-0 md:ml-20 justify-center'>
        <img src={walking} className='rounded-full h-60 w-60 sm:h-80 sm:w-80 md:h-[90%] md:w-[90%]' alt="Walking" />
      </div>
    </div>
  );
};

export default AboutPage;
