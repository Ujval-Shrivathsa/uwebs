import React from 'react';
import globe from './images/globeVector.png';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center px-4 md:px-8'>
      <div className='w-full max-w-screen-lg'>
        {/* Flex container for text and image */}
        <div className='flex flex-col md:flex-row items-center'>
          {/* Heading */}
          <h1 className='font-poppins text-zinc-800 text-3xl md:text-4xl lg:text-5xl md:w-[600px] lg:w-[850px] leading-snug text-center md:text-left'>
            At <span className='text-3xl font-semibold text-center md:text-4xl lg:text-5xl text-black'>U-Web Technology</span>, we help businesses thrive in the digital age.
          </h1>
          
          {/* Globe Image */}
          <div className='w-24 h-24 md:w-32 md:h-32 flex justify-center items-center rounded-full bg-blue-700 mt-8 md:mt-0 md:ml-8'>
            <img src={globe} className='w-16 md:w-20' alt="Globe" />
          </div>
        </div>

        {/* Subtext */}
        <div>
          <p className='font-poppins mt-10 md:mt-10 text-center md:text-left text-sm md:text-base'>
            We deliver sleek, cutting-edge websites that look great and perfectly fit your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
