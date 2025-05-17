'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingCart, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Mock featured products data
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Portland Cement',
    slug: 'premium-portland-cement',
    category: 'cement',
    price: 8.5,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.pexels.com/photos/1121304/pexels-photo-1121304.jpeg',
    sellers: [
      { id: 1, name: 'BuildSupply Co.', price: 8.5 },
      { id: 2, name: 'Cement Direct', price: 8.75 },
      { id: 3, name: 'Construction Materials Ltd', price: 8.25 }
    ],
    tags: ['Popular', 'Top Rated']
  },
  {
    id: 2,
    name: 'Red Clay Bricks (500 pcs)',
    slug: 'red-clay-bricks-500',
    category: 'bricks',
    price: 0.75,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg',
    sellers: [
      { id: 2, name: 'Cement Direct', price: 0.75 },
      { id: 4, name: 'Brick Masters', price: 0.72 },
      { id: 5, name: 'Quality Builders', price: 0.80 }
    ],
    tags: ['Best Seller']
  },
  {
    id: 3,
    name: 'TMT Steel Rebars (Grade 500)',
    slug: 'tmt-steel-rebars-grade-500',
    category: 'steel',
    price: 12.3,
    rating: 4.9,
    reviewCount: 76,
    image: 'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg',
    sellers: [
      { id: 1, name: 'BuildSupply Co.', price: 12.3 },
      { id: 6, name: 'Steel Solutions', price: 12.5 },
      { id: 7, name: 'Metal Works Inc', price: 12.25 }
    ],
    tags: ['Premium Quality']
  },
  {
    id: 4,
    name: 'Ceramic Floor Tiles (60x60cm)',
    slug: 'ceramic-floor-tiles-60x60',
    category: 'tiles',
    price: 3.2,
    rating: 4.7,
    reviewCount: 112,
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
    sellers: [
      { id: 5, name: 'Quality Builders', price: 3.2 },
      { id: 8, name: 'Tile World', price: 3.15 },
      { id: 9, name: 'Flooring Experts', price: 3.25 }
    ],
    tags: ['Trending']
  },
  {
    id: 5,
    name: 'Exterior Weather Resistant Paint',
    slug: 'exterior-weather-resistant-paint',
    category: 'paints',
    price: 45.0,
    rating: 4.5,
    reviewCount: 68,
    image: 'https://images.pexels.com/photos/5691628/pexels-photo-5691628.jpeg',
    sellers: [
      { id: 10, name: 'Paint Pros', price: 45.0 },
      { id: 11, name: 'Color Masters', price: 46.5 },
      { id: 5, name: 'Quality Builders', price: 44.75 }
    ],
    tags: ['Water Resistant']
  },
  {
    id: 6,
    name: 'Power Drill Kit with Accessories',
    slug: 'power-drill-kit-accessories',
    category: 'tools',
    price: 89.99,
    rating: 4.8,
    reviewCount: 94,
    image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg',
    sellers: [
      { id: 12, name: 'Tool Depot', price: 89.99 },
      { id: 13, name: 'Construction Tools Inc', price: 92.5 },
      { id: 1, name: 'BuildSupply Co.', price: 88.75 }
    ],
    tags: ['Complete Kit']
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
    
    // Here you would typically update the cart state
    // addToCart(product);
  };
  
  const handleCompare = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to compare",
      description: `${product.name} has been added to comparison`,
    });
    
    // Here you would update the comparison state
    // addToCompare(product);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Top-quality construction materials from trusted suppliers
            </p>
          </div>
          <Link href="/products" className="flex items-center text-primary hover:underline font-medium">
            View all products
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={`/product/${product.slug}`}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-60">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    {product.tags.length > 0 && (
                      <div className="absolute top-2 left-2 flex flex-col gap-2">
                        {product.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-black/70 text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pt-4 pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground capitalize">
                          {product.category}
                        </p>
                        <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Available from:</p>
                      <ul className="space-y-1">
                        {product.sellers.slice(0, 2).map((seller) => (
                          <li key={seller.id} className="flex justify-between text-sm">
                            <span>{seller.name}</span>
                            <span className="font-medium">${seller.price.toFixed(2)}</span>
                          </li>
                        ))}
                        {product.sellers.length > 2 && (
                          <li className="text-sm text-primary">
                            +{product.sellers.length - 2} more sellers
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-bold">${Math.min(...product.sellers.map(s => s.price)).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => handleCompare(e, product)}
                          title="Compare"
                        >
                          <BarChart2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={(e) => handleAddToCart(e, product)}
                          className="flex items-center"
                        >
                          <ShoppingCart className="mr-1 h-4 w-4" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;