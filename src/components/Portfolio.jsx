// import React from 'react';
// import { Play } from 'lucide-react';

// const Portfolio = () => {
//   const projects = [
//     { title: "CASH COW", type: "cash" },
//     { title: "REEL", type: "reel" },
//     { title: "VLOG", type: "vlog" }
//   ];

//   return (
//     <section className="py-16 px-4 lg:px-8 bg-black  overflow-x-hidden" id="portfolio">
//       <h2 className="text-3xl font-bold mb-12 text-center">MY BEST EDITS</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div key={index} className="relative group cursor-pointer">
//             <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
//               <img 
//                 src={`/api/placeholder/400/225`} 
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <Play size={48} className="text-white" />
//               </div>
//             </div>
//             <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Clock } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      title: "CINEMATIC WEDDING",
      category: "wedding",
      duration: "3:45",
      views: "12.5K",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "CORPORATE BRAND",
      category: "commercial",
      duration: "2:30",
      views: "8.2K",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "MUSIC VIDEO",
      category: "music",
      duration: "4:15",
      views: "25.1K",
      thumbnail: "/api/placeholder/400/225"
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-4 bg-black" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold text-center mb-4 gradient-text">
          FEATURED WORKS
        </h2>
        
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Each project is crafted with precision, creativity, and attention to detail
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'commercial', 'wedding', 'music'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-purple-600 text-white glow-effect'
                  : 'bg-purple-500/20 text-gray-400 hover:bg-purple-500/30'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center glow-effect"
                  >
                    <Play size={32} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;