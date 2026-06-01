import { useEffect, useRef, useState, useCallback } from 'react';
import { carouselImages } from '../data/mockData';

interface ThreeDCarouselProps {
  onImageClick: (url: string) => void;
}

const RADIUS = 320;

const ThreeDCarousel = ({ onImageClick }: ThreeDCarouselProps) => {
  const ringRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0.006);
  const rafRef = useRef<number | undefined>(undefined);
  const dragRef = useRef<{ startX: number; startRot: number; lastX: number } | null>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const N = carouselImages.length;

  const updateCards = useCallback((rot: number) => {
    const ring = ringRef.current;
    if (!ring) return;
    const cards = ring.querySelectorAll<HTMLElement>('.carousel-card');
    cards.forEach((card, i) => {
      const angle = (i / N) * Math.PI * 2;
      const a = angle + rot;
      const x = Math.sin(a) * RADIUS;
      const z = Math.cos(a) * RADIUS;
      const yWave = Math.sin(a * 2) * 18;
      const scale = 0.72 + 0.28 * ((z + RADIUS) / (RADIUS * 2));
      const opacity = 0.35 + 0.65 * ((z + RADIUS) / (RADIUS * 2));
      card.style.transform = `translateX(${x}px) translateZ(${z}px) translateY(${yWave}px) rotateY(${-a}rad) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.zIndex = String(Math.round(z + RADIUS));
    });
  }, [N]);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && !dragRef.current) {
        rotationRef.current += velocityRef.current;
      }
      updateCards(rotationRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [updateCards]);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { startX: e.clientX, startRot: rotationRef.current, lastX: e.clientX };
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      rotationRef.current = dragRef.current.startRot - (e.clientX - dragRef.current.startX) * 0.008;
      dragRef.current.lastX = e.clientX;
    };
    const onMouseUp = () => { dragRef.current = null; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  const snapTo = (dir: 1 | -1) => {
    const step = (Math.PI * 2) / N;
    const rot = rotationRef.current;
    const current = ((rot % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const nearest = Math.round(current / step) * step;
    rotationRef.current = rot + (nearest - current) + dir * step;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Scene */}
      <div
        className="relative w-full h-[480px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1100px' }}
        onMouseDown={handleMouseDown}
      >
        <div
          ref={ringRef}
          className="relative"
          style={{ transformStyle: 'preserve-3d', width: 0, height: 0 }}
        >
          {carouselImages.map((item, ) => (
            <div
              key={item.id}
              className="carousel-card absolute w-[200px] h-[260px] rounded-2xl overflow-hidden border border-white/15 transition-shadow duration-300"
              style={{
                top: -130,
                left: -100,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => onImageClick(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-6 bg-gradient-to-t from-black/70 to-transparent text-white text-[13px] font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-4 pb-15">
        <button onClick={() => snapTo(-1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition">‹</button>
        <button onClick={togglePause} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition">
          {paused ? '▶' : '⏸'}
        </button>
        <button onClick={() => snapTo(1)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition">›</button>
      </div>
    </div>
  );
};

export default ThreeDCarousel;