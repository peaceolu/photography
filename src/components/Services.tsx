import { motion } from 'framer-motion';
import { Camera, Video, PenTool, Sparkles } from 'lucide-react';

const services = [
  { icon: Camera, title: 'Photography', description: 'Stunning photos that tell your unique story and capture every important moment.' },
  { icon: Video, title: 'Videography', description: 'Cinematic videos that engage audiences and elevate your brand presence.' },
  { icon: PenTool, title: 'Editing', description: 'Professional post-production that brings out the best in every shot.' },
  { icon: Sparkles, title: 'Brand Shoots', description: 'Complete visual identity packages for businesses and creators.' },
];

const Services = () => {
  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive creative solutions for all your visual needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;