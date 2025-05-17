'use client';

import { motion } from 'framer-motion';
import { Globe, TruckIcon, Clock, LineChart, ShieldCheck, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <TruckIcon className="h-10 w-10 text-primary" />,
    title: 'Direct Delivery',
    description: 'Get materials delivered straight from suppliers to your site, saving time and logistics hassle.'
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'Price Comparison',
    description: 'Compare prices across multiple suppliers to get the best deals on all construction materials.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Quality Assurance',
    description: 'All suppliers are vetted and materials are quality-checked to ensure you get the best products.'
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Wide Selection',
    description: 'Access thousands of construction materials from hundreds of suppliers all in one place.'
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Verified Reviews',
    description: 'Read genuine reviews from contractors and builders who have used these materials.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Time Saving',
    description: 'Save hours of sourcing time with our streamlined ordering and quotation system.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose BuildMart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're revolutionizing how construction materials are sourced and purchased, 
            making the process easier, faster and more cost-effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-4">
            Join BuildMart today
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to simplify your material sourcing?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a contractor working on large projects or a homeowner doing renovations,
            BuildMart helps you find the best materials at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Create Account
            </a>
            <a href="/about" className="bg-white dark:bg-gray-800 text-primary font-medium px-6 py-3 rounded-lg border border-primary hover:bg-primary/10 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;