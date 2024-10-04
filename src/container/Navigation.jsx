import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from './images/Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-zinc-800 flex justify-between items-center px-4 md:px-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="flex items-center h-16 bg-white rounded-md p-2"> {/* Added background and padding */}
          <Link to="/"> {/* Use Link to navigate to the homepage */}
            <img src={Logo} alt="Logo" className="w-16 h-16" />
          </Link>
          <Link to="/" className='ml-0 text-zinc-700 text-xl font-poppins'><span className='text-black font-semibold'>U-Web</span> Tech</Link> {/* Updated text color for better contrast */}
        </div>
      </div>

      {/* Links Section */}
      <div className="hidden md:flex space-x-8">
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200" to="/about">
          About
        </Link>
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200" to="/work">
          Work
        </Link>
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200" to="/contact">
          Contact
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Links Section */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-zinc-800 px-4 py-6`}>
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200 block mb-4" to="/about">
          About
        </Link>
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200 block mb-4" to="/work">
          Work
        </Link>
        <Link className="text-zinc-300 font-poppins hover:text-white transition duration-200 block mb-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
