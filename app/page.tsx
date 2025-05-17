import HeroSection from '@/components/home/hero-section';
import FeaturedProducts from '@/components/home/featured-products';
import CategoryShowcase from '@/components/home/category-showcase';
import TopSellers from '@/components/home/top-sellers';
import WhyChooseUs from '@/components/home/why-choose-us';
import TestimonialSection from '@/components/home/testimonial-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhyChooseUs />
      <TopSellers />
      <TestimonialSection />
    </div>
  );
}