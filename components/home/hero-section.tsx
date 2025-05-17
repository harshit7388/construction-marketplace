'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg" 
          alt="Construction site background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold leading-tight"
              variants={itemVariants}
            >
              Building materials marketplace for <span className="text-yellow-400">contractors and homeowners</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-lg"
              variants={itemVariants}
            >
              Find the best prices on cement, bricks, steel, tiles and more from trusted suppliers in one place.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSearch}
              className="flex w-full max-w-md"
              variants={itemVariants}
            >
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products, brands, or materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 focus:ring-yellow-400 focus:border-yellow-400 w-full rounded-l-md rounded-r-none"
                />
              </div>
              <Button 
                type="submit" 
                className="rounded-l-none h-12 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
              >
                Search
              </Button>
            </motion.form>
            
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              variants={itemVariants}
            >
              <span className="text-sm text-gray-400">Popular searches:</span>
              <Link href="/search?q=cement" className="text-sm text-yellow-400 hover:underline">Cement</Link>
              <Link href="/search?q=bricks" className="text-sm text-yellow-400 hover:underline">Bricks</Link>
              <Link href="/search?q=steel" className="text-sm text-yellow-400 hover:underline">Steel Bars</Link>
              <Link href="/search?q=tiles" className="text-sm text-yellow-400 hover:underline">Tiles</Link>
            </motion.div>
          </motion.div>
          
          <div className="hidden lg:block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-tr from-blue-600/20 to-yellow-500/20 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Premium Cement",
                      price: "$8.50",
                      image: "https://images.pexels.com/photos/1121304/pexels-photo-1121304.jpeg"
                    },
                    {
                      name: "Clay Bricks",
                      price: "$0.75",
                      image: "https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg"
                    },
                    {
                      name: "Steel Rebars",
                      price: "$12.30",
                      image: "https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg"
                    },
                    {
                      name: "Ceramic Tiles",
                      price: "$3.20",
                      image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
                    }
                  ].map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-colors"
                    >
                      <div className="h-32 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-white">{product.name}</h3>
                        <p className="text-yellow-400 font-bold">{product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;