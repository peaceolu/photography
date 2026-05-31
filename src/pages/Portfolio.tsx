import { useState } from 'react';
import PortfolioFilter from '../components/PortfolioFilter';
import Lightbox from '../components/Lightbox';
import { portfolioItems } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (url: string) => {
    const allImages = portfolioItems.map(item => item.image);
    setImageList(allImages);
    setCurrentIndex(allImages.indexOf(url));
    setLightboxOpen(true);
  };
  
  return (
    <>
      <ScrollReveal>
        <div className="pt-32 pb-12 text-center bg-gradient-to-b from-primary/5 to-transparent">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning visual stories
          </p>
        </div>
      </ScrollReveal>
      <PortfolioFilter onImageClick={handleImageClick} />
      {lightboxOpen && (
        <Lightbox
          images={imageList}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentIndex((prev) => (prev + 1) % imageList.length)}
          onPrev={() => setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length)}
        />
      )}
    </>
  );
};

export default Portfolio;