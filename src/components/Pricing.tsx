import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 499,
    description: 'Perfect for small businesses',
    features: ['2 photo sessions', '50 edited images', 'Online gallery', 'Basic retouching'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 999,
    description: 'Most popular for growing brands',
    features: ['5 photo sessions', '200 edited images', 'Video highlight reel', 'Advanced retouching', 'Priority support'],
    popular: true,
  },
  {
    name: 'Premium',
    price: 1999,
    description: 'Full-service creative partnership',
    features: ['Unlimited sessions', 'All edited images', 'Full video production', 'Commercial rights', 'Dedicated creative director'],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-gradient-to-br from-background to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/project</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={18} className="text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-primary">Choose Plan</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;