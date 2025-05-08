import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] py-16 px-6 md:py-24 md:px-8 overflow-hidden">
     

      <div className="absolute inset-0 z-0">
        <img
          src="i1.jpg"
          alt="Business Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> 
      </div>

     

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 h-full">
       
       
        <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-colors duration-300">
            Welcome to Our Site
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto md:mx-0 transition-colors duration-300">
          This is a simple site built with React and Tailwind CSS.<br/>
          Explore, enjoy, and see what’s possible with clean code and creativity.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
