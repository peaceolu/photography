import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../data/mockData';

interface PortfolioFilterProps {
  onImageClick: (url: string) => void;
}

const PortfolioFilter = ({ onImageClick }: PortfolioFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800"
                onClick={() => onImageClick(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">View Project</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioFilter;