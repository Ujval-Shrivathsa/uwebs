import React from 'react';

const Assist = () => {
  return (
    <div className='w-full h-auto min-h-[90vh] flex flex-col justify-center items-center p-4'>
      <div>
        <p className='font-poppins text-4xl text-center mt-16'>I’m here to assist you with</p>
      </div>
      <div className='flex flex-col gap-10 mt-12 md:flex-row'>
        <div className='w-full h-auto bg-white rounded-lg shadow-lg p-4'>
          <p className='font-bold font-poppins'>1</p>
          <hr className='w-full mt-3 h-1 bg-black' />
          <p className='font-poppins text-xl font-light mt-4'>Design</p>
          <p className='font-poppins mt-4'>With a strong reputation in web design, I ensure the creation of functional and user-friendly digital designs.</p>
        </div>
        <div className='w-full h-auto bg-white rounded-lg shadow-lg p-4'>
          <p className='font-bold font-poppins'>2</p>
          <hr className='w-full mt-3 h-1 bg-black' />
          <p className='font-poppins text-xl font-light mt-4'>Development</p>
          <p className='font-poppins mt-4'>I develop scalable websites from the ground up, perfectly aligned with design aesthetics.</p>
        </div>
        <div className='w-full h-auto bg-white rounded-lg shadow-lg p-4'>
          <p className='font-bold font-poppins'>3</p>
          <hr className='w-full mt-3 h-1 bg-black' />
          <p className='font-poppins text-xl font-light mt-4'>UI / UX</p>
          <p className='font-poppins mt-4'>I specialize in crafting user-centric designs that prioritize usability and aesthetics, ensuring a seamless experience for users while effectively meeting business goals.</p>
        </div>
      </div>
    </div>
  );
}

export default Assist;
