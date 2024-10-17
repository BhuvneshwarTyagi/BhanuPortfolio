import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import images directly
import AfterEffects from './../assets/After Effects.png';
import PremierePro from './../assets/Premiere Pro.png';
import DaVinciResolve from './../assets/DaVinci Resolve.png';
import FinalCutPro from './../assets/Final Cut Pro.png';

const tools = [
  { name: 'After Effects', image: AfterEffects },
  { name: 'Premiere Pro', image: PremierePro },
  { name: 'DaVinci Resolve', image: DaVinciResolve },
  { name: 'Final Cut Pro', image: FinalCutPro },
];

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center" id="home">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
          poster="/api/placeholder/1920/1080"
        >
          <source src="/api/placeholder-video" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-['Orbitron'] mb-6">
            <span className="text-xl text-purple-500">Bhanu Chaudhary</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">
              PROFESSIONAL VIDEO EDITOR
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transforming raw footage into cinematic masterpieces with cutting-edge techniques 
            and creative storytelling
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 rounded-full font-semibold tracking-wide hover:bg-purple-700 glow-effect"
            >
              LET'S CREATE MAGIC
            </motion.button>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500 rounded-full font-semibold tracking-wide hover:bg-purple-500/20"
            >
              VIEW PORTFOLIO
            </motion.a>
          </div>

          {/* Tools Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <img src={tool.image} alt={tool.name} className="w-12 h-12" />
                </div>
                <p className="text-sm text-gray-400">{tool.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
