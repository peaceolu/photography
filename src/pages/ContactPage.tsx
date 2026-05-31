import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';

const ContactPage = () => {
  return (
    <>
      <ScrollReveal>
        <div className="pt-32 pb-12 text-center bg-gradient-to-b from-primary/5 to-transparent">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next creative project
          </p>
        </div>
      </ScrollReveal>
      <ContactForm />
    </>
  );
};

export default ContactPage;