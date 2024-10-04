import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Hero = () => {
  // State variables for form input and success message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // EmailJS API call
    emailjs.send('service_3ars70m', 'template_7ykj4a8', {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }, 'ypvaQ9e-D55RaPeBt')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Clear the form after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      // Set success message
      setSuccessMessage('We will respond to you shortly.');
    }, (err) => {
      console.log('FAILED...', err);
      // Optionally, you can also set an error message here
    });
  };

  return (
    <div className='w-full h-screen flex justify-center items-start pt-16 md:pt-20'>
      <div className='w-full max-w-lg px-4'> {/* Added padding for better spacing on small devices */}
      <div>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-poppins font-light w-full max-w-3xl mx-auto text-center'>
          Let's connect and kickstart your journey today!
        </h1>
      </div>


        {/** Conditional rendering for success message */}
        {successMessage ? (
          <div className='mt-10 text-center'>
            <p className='text-xl font-poppins text-green-900 font-light'>{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={sendEmail}>
            <div className='mt-8'>
              <p className='text-xl font-poppins font-medium ml-10'>1. Name</p>
              <input
                placeholder='Your name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full sm:w-[200px] md:w-full h-16 mt-3 border-t-2 border-b-2 border-black p-2 focus:outline-none'
              />
            </div>
            <div className='mt-8'>
              <p className='text-xl font-poppins font-medium ml-10'>2. Email</p>
              <input
                placeholder='Your email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full sm:w-[200px] md:w-full h-16 mt-3 border-t-2 border-b-2 border-black p-2 focus:outline-none'
              />
            </div>
            <div className='mt-8'>
              <p className='text-xl font-poppins font-medium ml-10'>3. Phone no.</p>
              <input
                type="tel"
                placeholder='Your phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full sm:w-[200px] md:w-full h-16 mt-3 border-t-2 border-b-2 border-black p-2 focus:outline-none'
              />
            </div>
            <div className='mt-8'>
              <p className='text-xl font-poppins font-medium ml-10'>4. Your message</p>
              <textarea
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full sm:w-[200px] md:w-full h-36 resize-none mt-3 border-t-2 border-b-2 border-black p-2 focus:outline-none'
              />
            </div>
            <div className='mt-10'>
              <button type="submit" className='w-20 h-20 sm:w-20 rounded-full text-white font-medium font-poppins bg-blue-600 ml-10 sm:ml-32'>
                Send It!
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;
