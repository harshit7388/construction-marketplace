import { NextResponse } from 'next/server';

// Mock product data - in a real app, this would come from MongoDB
const products = [
  {
    id: 1,
    name: 'Premium Portland Cement',
    slug: 'premium-portland-cement',
    category: 'cement',
    description: 'High-quality Portland cement suitable for all construction needs.',
    price: 8.5,
    unit: 'bag',
    weight: '50kg',
    brand: 'BuilderPlus',
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.pexels.com/photos/1121304/pexels-photo-1121304.jpeg',
    sellers: [
      { id: 1, name: 'BuildSupply Co.', price: 8.5 },
      { id: 2, name: 'Cement Direct', price: 8.75 },
      { id: 3, name: 'Construction Materials Ltd', price: 8.25 }
    ]
  },
  {
    id: 2,
    name: 'Red Clay Bricks',
    slug: 'red-clay-bricks-500',
    category: 'bricks',
    description: 'Standard size red clay bricks, perfect for walls and decorative features.',
    price: 0.75,
    unit: 'piece',
    brand: 'ClayMaster',
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg',
    sellers: [
      { id: 2, name: 'Cement Direct', price: 0.75 },
      { id: 4, name: 'Brick Masters', price: 0.72 },
      { id: 5, name: 'Quality Builders', price: 0.80 }
    ]
  },
  {
    id: 3,
    name: 'TMT Steel Rebars',
    slug: 'tmt-steel-rebars-grade-500',
    category: 'steel',
    description: 'High-strength TMT steel rebars for reinforced concrete structures.',
    price: 12.3,
    unit: 'kg',
    brand: 'SteelForce',
    inStock: true,
    rating: 4.9,
    reviewCount: 76,
    image: 'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg',
    sellers: [
      { id: 1, name: 'BuildSupply Co.', price: 12.3 },
      { id: 6, name: 'Steel Solutions', price: 12.5 },
      { id: 7, name: 'Metal Works Inc', price: 12.25 }
    ]
  }
];

export async function GET(req: Request) {
  // Get URL to extract query parameters
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q');
  
  let filteredProducts = [...products];
  
  // Filter by category if specified
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    );
  }
  
  // Filter by search query if specified
  if (query) {
    const searchLower = query.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
    );
  }
  
  return NextResponse.json(filteredProducts);
}