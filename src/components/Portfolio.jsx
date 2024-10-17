import React from 'react';
import { Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: "CASH COW", type: "cash" },
    { title: "REEL", type: "reel" },
    { title: "VLOG", type: "vlog" }
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-black  overflow-x-hidden" id="portfolio">
      <h2 className="text-3xl font-bold mb-12 text-center">MY BEST EDITS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={`/api/placeholder/400/225`} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={48} className="text-white" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;