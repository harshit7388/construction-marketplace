'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Carpenter',
    role: 'Independent Contractor',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    text: 'BuildMart has completely transformed how I source materials for my projects. The ability to compare prices from multiple suppliers saves me both time and money. The quality is consistently excellent.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Project Manager, BuildRight Construction',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'Managing material procurement for large projects used to be a logistical nightmare. With BuildMart, we\'ve streamlined our entire supply chain. The quote generation feature is particularly valuable for our budgeting process.'
  },
  {
    id: 3,
    name: 'Michael Zhang',
    role: 'Home Renovation Specialist',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'What impresses me most about BuildMart is the selection. I can find specialty items that used to require visits to multiple suppliers. The delivery is always prompt and the materials arrive in perfect condition.'
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Architect & Interior Designer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    text: 'As someone who values quality and aesthetics, I need materials that meet specific requirements. BuildMart\'s detailed product information and verified reviews help me make confident choices for my design projects.'
  }
];

const TestimonialSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 400; // Approximate width of a testimonial + margin
    const scrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Hear from contractors and builders who use BuildMart
            </p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          className="flex overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4 scroll-smooth"
          ref={scrollContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-w-[340px] md:min-w-[400px] w-[340px] md:w-[400px] mx-4 flex-shrink-0"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                
                <p className="text-muted-foreground mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;