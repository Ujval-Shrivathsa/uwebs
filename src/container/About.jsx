import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full min-h-[80vh] md:h-auto md:h-[80vh] bg-black p-6 md:mt-16'>
        <div className='w-full md:w-[700px]'>
            <p className='leading-8 md:leading-10 text-white text-2xl md:text-3xl font-light font-poppins text-center md:text-left'>
                Hello, I am Ujval. I am a Web Developer, Web Designer, and UI/UX Designer. I create stunning, simple-looking websites.
            </p>
        </div>
        <div className='mt-6 md:mt-0 md:ml-20 w-full md:w-[300px]'>
            <p className='leading-6 text-white text-base md:text-base font-light font-poppins text-center md:text-left'>
                My passion for design, coding, and interaction uniquely positions me within the web design world, blending creativity with functionality.
            </p>
            <div className='flex justify-center md:justify-start'>
                <button 
                  className='w-32 md:w-40 h-14 md:h-20 mt-4 md:mt-6 rounded-lg bg-white text-black font-medium font-poppins'
                  onClick={() => navigate('/Contact')} // Use navigate to redirect to the Contact page
                >
                    Contact Me
                </button>
            </div>
        </div>
    </div>
  )
}

export default About;
