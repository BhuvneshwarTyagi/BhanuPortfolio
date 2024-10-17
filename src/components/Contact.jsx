import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 px-4 lg:px-8 bg-black  overflow-x-hidden" id="contact">
      <h2 className="text-3xl font-bold mb-12 text-center">I AM READY TO CONSULT YOU</h2>
      <div className="max-w-4xl mx-auto">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="My Name Is"
              className="w-full p-3 bg-transparent border border-gray-700 rounded focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="I Am Interested In"
              rows="4"
              className="w-full p-3 bg-transparent border border-gray-700 rounded focus:border-purple-500 focus:outline-none"
            ></textarea>
          </div>
          <button className="bg-purple-600 px-8 py-3 rounded hover:bg-purple-700">
            SEND
          </button>
        </form>
        
        <div className="mt-12 space-y-4">
          <div className="flex items-center space-x-4">
            <Phone size={20} className="text-purple-500" />
            <span>+91 9548573517</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail size={20} className="text-purple-500" />
            <span>bhanuchaudhary8098@gmail.com</span>
          </div>
          {/* <div className="flex items-center space-x-4">
            <MapPin size={20} className="text-purple-500" />
            <span>Defense Phase 3, Lahore Pakistan</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;