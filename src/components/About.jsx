import React from 'react';

const About = () => {
  const services = [
    "Cash Flow Editing",
    "Reels Editing",
    "Logo Animation",
    "Podcast Edit"
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-black  overflow-x-hidden" id="about">
      <h2 className="text-3xl font-bold mb-8 text-center">ABOUT ME</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
        Welcome To The Cinematic Realm Of Jimmy, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into Extraordinary Visual Experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;