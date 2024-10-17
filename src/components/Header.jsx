import React from 'react';
import { Menu } from 'lucide-react';
import './header.css'
const Header = () => {
  return ( 
    <header className="header  flex justify-between items-center p-4 lg:p-6  overflow-x-hidden shadow-lg shadow-black/50">
      <div className="text-xl font-bold">Bhanu Chaudhary</div>
      <nav className="hidden lg:flex space-x-8 ">
        <a href="#home" className="hover:text-purple-500 text-white">HOME</a>
        <a href="#about" className="hover:text-purple-500 text-white">ABOUT</a>
        <a href="#service" className="hover:text-purple-500 text-white">SERVICES</a>

        <a href="#portfolio" className="hover:text-purple-500 text-white">PORTFOLIO</a>
        <a href="#testimonials" className="hover:text-purple-500 text-white">TESTIMONIALS</a>
        <a href="#contact" className="hover:text-purple-500 text-white">CONTACT</a>
      </nav>
      <button className="lg:hidden">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;