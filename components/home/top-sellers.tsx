'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Building2, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for top sellers
const topSellers = [
  {
    id: 1,
    name: 'BuildSupply Co.',
    logo: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    rating: 4.8,
    reviews: 156,
    productCount: 1245,
    location: 'New York, NY',
    specialties: ['Cement', 'Steel', 'Hardware'],
    featured: true
  },
  {
    id: 2,
    name: 'Cement Direct',
    logo: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    rating: 4.7,
    reviews: 132,
    productCount: 430,
    location: 'Chicago, IL',
    specialties: ['Cement', 'Concrete', 'Aggregates'],
    featured: true
  },
  {
    id: 3,
    name: 'Construction Materials Ltd',
    logo: 'https://images.pexels.com/photos/1418388/pexels-photo-1418388.jpeg',
    rating: 4.6,
    reviews: 98,
    productCount: 785,
    location: 'Los Angeles, CA',
    specialties: ['Bricks', 'Blocks', 'Cement'],
    featured: true
  },
  {
    id: 4,
    name: 'Brick Masters',
    logo: 'https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg',
    rating: 4.9,
    reviews: 87,
    productCount: 320,
    location: 'Houston, TX',
    specialties: ['Bricks', 'Blocks', 'Pavers'],
    featured: true
  },
  {
    id: 5,
    name: 'Quality Builders',
    logo: 'https://images.pexels.com/photos/2760290/pexels-photo-2760290.jpeg',
    rating: 4.7,
    reviews: 112,
    productCount: 950,
    location: 'Philadelphia, PA',
    specialties: ['Tiles', 'Paints', 'Cement'],
    featured: false
  },
  {
    id: 6,
    name: 'Steel Solutions',
    logo: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg',
    rating: 4.8,
    reviews: 76,
    productCount: 540,
    location: 'Dallas, TX',
    specialties: ['Steel', 'Metal', 'Rebar'],
    featured: true
  }
];

const TopSellers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 320; // Approximate width of a card + margin
    const scrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Top Sellers</h2>
            <p className="text-muted-foreground">
              Trusted suppliers with quality construction materials
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
          className="flex overflow-x-auto scrollbar-hide pb-6 -mx-2 px-2 scroll-smooth"
          ref={scrollContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {topSellers.map((seller, index) => (
            <motion.div
              key={seller.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-w-[300px] w-[300px] mx-2 flex-shrink-0"
            >
              <Link href={`/seller/${seller.id}`}>
                <div className={cn(
                  "h-full rounded-xl overflow-hidden border transition-all hover:shadow-md",
                  seller.featured ? "border-primary/30 bg-primary/5" : "border-border"
                )}>
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={seller.logo}
                      alt={seller.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    {seller.featured && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                        Featured Seller
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{seller.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {seller.location}
                        </div>
                      </div>
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm font-medium">{seller.rating}</span>
                      <span className="ml-1 text-xs text-muted-foreground">({seller.reviews} reviews)</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Specializes in:</p>
                        <div className="flex flex-wrap gap-1">
                          {seller.specialties.map((specialty, i) => (
                            <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <span className="text-muted-foreground">Products: </span>
                        <span className="font-medium">{seller.productCount.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      View Seller
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/sellers">
            <Button variant="outline">
              View All Sellers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;