import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;