import { useState } from 'react';
import Hero from '../components/Hero';
import ThreeDCarousel from '../components/ThreeDCarousel';
import FeaturedGrid from '../components/FeaturedGrid';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import VideoReel from '../components/VideoReel';
import Lightbox from '../components/Lightbox';

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (url: string, allImages?: string[]) => {
    if (allImages) {
      setImageList(allImages);
      setCurrentIndex(allImages.indexOf(url));
    } else {
      setImageList([url]);
      setCurrentIndex(0);
    }
    setLightboxOpen(true);
  };
 

  return (
    <>
      <Hero />
      <ThreeDCarousel onImageClick={(url) => handleImageClick(url, [url])} />
      <FeaturedGrid onImageClick={(url) => handleImageClick(url)} />
      <Services />
      <Pricing />
      <Testimonials />
      <VideoReel />
      <ContactForm />
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

export default Home;