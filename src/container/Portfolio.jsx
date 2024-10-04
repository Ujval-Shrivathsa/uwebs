import React from 'react';
import portfolioOne from './images/PortfolioImage1.png';
import portfolioTwo from './images/PortfolioImage2.png';
import portfolioThree from './images/PortfolioImage3.png';
import portfolioFour from './images/PortfolioImage4.png';

const Portfolio = () => {
  return (
    <div className='w-full flex h-auto items-center justify-center p-4'>
      {/* For small screens, stack images in a single column. For larger screens, display in two columns */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <img className='w-full h-auto mt-12' src={portfolioOne} alt="Portfolio 1" />
        <img className='w-full h-auto mt-12' src={portfolioTwo} alt="Portfolio 2" />
        <img className='w-full h-auto mt-12' src={portfolioThree} alt="Portfolio 3" />
        <img className='w-full h-auto mt-12' src={portfolioFour} alt="Portfolio 4" />
      </div>
    </div>
  );
};

export default Portfolio;
