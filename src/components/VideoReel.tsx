import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { videoReels } from '../data/mockData';

const VideoReel = () => {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Video Reels</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Behind the scenes and creative moments
          </p>
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
          {videoReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-none w-80 md:w-96 snap-center relative group rounded-xl overflow-hidden shadow-xl"
            >
              <video
                src={reel.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover"
              />
              <button
                onClick={() => toggleLike(reel.id)}
                className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:scale-110 transition-transform"
              >
                <Heart
                  size={24}
                  className={liked.includes(reel.id) ? 'fill-red-500 text-red-500' : 'text-white'}
                />
              </button>
              <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {reel.likes + (liked.includes(reel.id) ? 1 : 0)} likes
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReel;