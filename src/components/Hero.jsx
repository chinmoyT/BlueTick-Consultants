import React from 'react';
import hero from '../assets/hero1.jpg';

const Hero = () => {
  return (
    <div className='container flex flex-wrap justify-around items-center py-8 px-4 lg:px-0 h-screen overflow-y-auto'>
      <div className='text-center lg:text-left mb-10 lg:mb-0'>
        <h1 className='mb-6'>
          <span className='text-3xl font-bold mb-2 border rounded-2xl p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
            Bluetick Consultants</span>
        </h1>
        <p className='font-semibold mb-2'>Founded in 2017, we are a technology-driven firm that </p>
        <p className='font-semibold mb-4'>has made a significant impact in the Indian and US Startup ecosystems.</p>
        <p className='mb-1'>
          <span className='font-semibold bg-purple-800 text-white px-2 py-1 rounded-full'>Transforming enterprises</span>
        </p>
        <p className='font-semibold'>
          with cutting-edge, scalable, privacy-focused Generative AI solutions.
        </p>
      </div>
      <div className='image'>
        <img src={hero} className='w-full max-w-lg md:w-3/4 lg:w-2/3 xl:h-3/4' alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
