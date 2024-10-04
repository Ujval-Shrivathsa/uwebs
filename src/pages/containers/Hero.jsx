import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import doodle from './images/doodlewebsite.avif';

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="w-full flex justify-center items-center h-[90vh] px-4 md:px-8">
      <div>
        <div className="flex flex-col md:flex-row items-center">
          <p className="font-poppins text-4xl md:text-5xl lg:text-6xl w-full md:w-[500px] lg:w-[600px] mb-8 md:mb-0 font-medium">
            Creating <span className='text-zinc-400 font-normal'>next-level</span> websites
          </p>
          <div className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-green-500 flex justify-center items-center lg:ml-10">
            <img src={doodle} className="rounded-full w-16 md:w-24 lg:w-32" alt="Doodle" />
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
          <button 
            className="font-poppins text-lg w-48 h-16 bg-black text-white rounded-lg"
            onClick={() => navigate('/Contact')} // Navigate to the Contact page
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
