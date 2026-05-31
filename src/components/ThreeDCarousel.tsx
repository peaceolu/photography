import { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { carouselImages } from '../data/mockData';

interface ThreeDCarouselProps {
  onImageClick: (url: string) => void;
}

const ThreeDCarousel = ({ onImageClick }: ThreeDCarouselProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotationAngle = useMotionValue(0);
  const radius = 400;
  const itemCount = carouselImages.length;

  useAnimationFrame(() => {
    if (!isHovered) {
      const speed = 0.002;
      rotationAngle.set(rotationAngle.get() + speed);
    }
  });

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden [perspective:1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotationAngle.get()}rad)`,
        }}
      >
        {carouselImages.map((item, index) => {
          const angle = (index / itemCount) * Math.PI * 2;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          // Calculate angular distance to determine center item
          const currentAngle = rotationAngle.get() % (Math.PI * 2);
          let angleDiff = Math.abs(angle - currentAngle);
          angleDiff = Math.min(angleDiff, Math.PI * 2 - angleDiff);
          const isCenter = angleDiff < 0.3;
          
          return (
            <motion.div
              key={item.id}
              className="absolute top-1/2 left-1/2 w-[300px] h-[200px] cursor-pointer"
              style={{
                x: x - 150,
                y: '-50%',
                z: z,
                rotateY: -angle,
                scale: isCenter ? 1.2 : 0.8,
                opacity: isCenter ? 1 : 0.6,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: isCenter ? 1.3 : 0.9, z: z + 50 }}
              onClick={() => onImageClick(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeDCarousel;