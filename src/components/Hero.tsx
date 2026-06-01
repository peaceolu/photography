import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-15">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background dark:from-primary/10 dark:via-gray-900 dark:to-gray-900" />
      
      {/* Decorative Blurred Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6"
        >
          <span className="text-primary font-medium">Trusted by 100,000+ creators</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight"
        >
          Capture Stories<br />
          That <span className="text-primary">Sell</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Professional photography and videography services that elevate your brand and captivate your audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
         <button
  className="btn-primary flex items-center gap-2 group text-center justify-center"
  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
>
  View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
</button>

<button
  className="btn-secondary flex items-center gap-2 justify-center"
  onClick={() => document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth' })}
>
  <Play size={18} /> Watch Showreel
</button>
        </motion.div>

        {/* Floating Annotations */}
        
      
      </div>
    </section>
  );
};

export default Hero;