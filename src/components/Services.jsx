import React from 'react';
import { motion } from 'framer-motion';
import { Video, Film, Music, Tv } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Commercial Videos",
      description: "High-impact promotional videos that drive engagement and conversions"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Wedding Films",
      description: "Cinematic wedding stories that capture every precious moment"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Videos",
      description: "Creative music videos that bring your songs to life"
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Social Media",
      description: "Engaging content optimized for all social platforms"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black" id='service'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold gradient-text mb-4">
            MY SERVICES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional video editing services tailored to your specific needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-purple-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;