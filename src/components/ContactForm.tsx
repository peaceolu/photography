import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Create Together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ready to bring your vision to life? Get in touch with us and let's discuss your project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Send size={18} className="text-primary" />
                </div>
                <span>contact@ImaPho.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                  placeholder="Email Address"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Valid email required</p>}
              </div>

              <div>
                <select
                  {...register('projectType', { required: true })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Select Project Type</option>
                  <option value="photography">Photography</option>
                  <option value="videography">Videography</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : isSuccess ? <><CheckCircle size={18} /> Sent!</> : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;