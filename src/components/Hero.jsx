import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center p-4 lg:p-8  overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900 opacity-90"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Bhanu Chaudhary
          <br />
          <span className="text-4xl lg:text-6xl">PROFESSIONAL VIDEO EDITOR</span>
        </h1>
        <p className="text-gray-300 mb-8">Making Your Videos Look More Cool</p>
        <button className="bg-purple-600 px-8 py-3 rounded hover:bg-purple-700">
          LETS TALK
        </button>
      </div>
    </section>
  );
};

export default Hero;