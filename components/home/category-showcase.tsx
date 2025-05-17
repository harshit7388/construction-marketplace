'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'cement',
    name: 'Cement & Concrete',
    description: 'OPC, PPC, Ready-mix and more',
    icon: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'bricks',
    name: 'Bricks & Blocks',
    description: 'Clay, Concrete, AAC blocks',
    icon: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'steel',
    name: 'Steel & Iron',
    description: 'TMT bars, Structural steel',
    icon: 'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg',
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 'tiles',
    name: 'Tiles & Flooring',
    description: 'Ceramic, Vitrified, Marble',
    icon: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
    color: 'from-amber-500 to-amber-700'
  },
  {
    id: 'paints',
    name: 'Paints & Finishes',
    description: 'Interior, Exterior, Waterproof',
    icon: 'https://images.pexels.com/photos/5691628/pexels-photo-5691628.jpeg',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'tools',
    name: 'Tools & Equipment',
    description: 'Hand tools, Power tools, Machinery',
    icon: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg',
    color: 'from-yellow-500 to-yellow-700'
  }
];

const CategoryShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of construction materials organized by category to find exactly what you need for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.id}`}>
                <div 
                  className={cn(
                    "relative h-64 rounded-xl overflow-hidden group cursor-pointer",
                    hoveredCategory === category.id ? "ring-2 ring-primary" : ""
                  )}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Background image */}
                  <Image
                    src={category.icon}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-80",
                    category.color
                  )}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    
                    <div className="flex items-center mt-auto">
                      <span className="text-sm font-medium">Browse Products</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;