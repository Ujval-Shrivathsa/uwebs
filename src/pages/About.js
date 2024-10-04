import React from 'react';
import Navigation from '../container/Navigation';
import Hero from './container/Hero';
import AboutPage from './container/AboutPage';
import Assist from './container/Assist';
import Contact from '../container/Contact';

const About = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutPage />
      <Assist />
      <Contact />
    </>
  );
};

export default About;
