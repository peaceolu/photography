import Services from '../components/Services';
import ScrollReveal from '../components/ScrollReveal';

const ServicesPage = () => {
  return (
    <>
      <ScrollReveal>
        <div className="pt-32 pb-12 text-center bg-gradient-to-b from-primary/5 to-transparent">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive creative solutions for every need
          </p>
        </div>
      </ScrollReveal>
      <Services />
    </>
  );
};

export default ServicesPage;