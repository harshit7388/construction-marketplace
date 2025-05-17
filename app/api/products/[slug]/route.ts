import { NextResponse } from 'next/server';

// Mock product data - in a real app, this would come from MongoDB
const products = [
  {
    id: 1,
    name: 'Premium Portland Cement',
    slug: 'premium-portland-cement',
    category: 'cement',
    description: 'High-quality Portland cement suitable for all construction needs. This premium grade cement provides excellent strength and durability for concrete structures, foundations, and general construction work.',
    price: 8.5,
    unit: 'bag',
    weight: '50kg',
    brand: 'BuilderPlus',
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.pexels.com/photos/1121304/pexels-photo-1121304.jpeg',
    images: [
      'https://images.pexels.com/photos/1121304/pexels-photo-1121304.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg'
    ],
    specifications: {
      'Type': 'OPC (Ordinary Portland Cement)',
      'Grade': '53',
      'Setting Time': '30-60 minutes',
      'Compressive Strength': '53 MPa after 28 days',
      'Packaging': '50kg bag'
    },
    sellers: [
      { 
        id: 1, 
        name: 'BuildSupply Co.', 
        price: 8.5,
        rating: 4.8,
        delivery: 'Available',
        deliveryTime: '1-3 days',
        minimumOrder: 10
      },
      { 
        id: 2, 
        name: 'Cement Direct', 
        price: 8.75,
        rating: 4.6,
        delivery: 'Available',
        deliveryTime: 'Same day',
        minimumOrder: 5
      },
      { 
        id: 3, 
        name: 'Construction Materials Ltd', 
        price: 8.25,
        rating: 4.7,
        delivery: 'Available',
        deliveryTime: '2-4 days',
        minimumOrder: 20
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'John D.',
        rating: 5,
        date: '2023-12-15',
        comment: 'Excellent quality cement, sets perfectly and gives great strength.'
      },
      {
        id: 2,
        user: 'Sarah M.',
        rating: 4,
        date: '2023-11-28',
        comment: 'Good product, though packaging was slightly damaged on delivery.'
      },
      {
        id: 3,
        user: 'Mike T.',
        rating: 5,
        date: '2023-10-17',
        comment: 'Consistent quality and good price. I use this for all my projects.'
      }
    ],
    relatedProducts: [2, 5, 6]
  },
  {
    id: 2,
    name: 'Red Clay Bricks',
    slug: 'red-clay-bricks-500',
    category: 'bricks',
    description: 'Standard size red clay bricks, perfect for walls and decorative features. These durable bricks are kiln-fired and provide excellent thermal insulation and aesthetic appeal.',
    price: 0.75,
    unit: 'piece',
    dimensions: '230mm x 110mm x 70mm',
    brand: 'ClayMaster',
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg',
    images: [
      'https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg',
      'https://images.pexels.com/photos/2469046/pexels-photo-2469046.jpeg',
      'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg'
    ],
    specifications: {
      'Material': 'Clay',
      'Type': 'Common Burnt Clay Brick',
      'Size': '230mm x 110mm x 70mm',
      'Compressive Strength': '>5.0 N/mm²',
      'Water Absorption': '<20%'
    },
    sellers: [
      { 
        id: 2, 
        name: 'Cement Direct', 
        price: 0.75,
        rating: 4.6,
        delivery: 'Available',
        deliveryTime: '2-4 days',
        minimumOrder: 1000
      },
      { 
        id: 4, 
        name: 'Brick Masters', 
        price: 0.72,
        rating: 4.9,
        delivery: 'Available',
        deliveryTime: '3-5 days',
        minimumOrder: 500
      },
      { 
        id: 5, 
        name: 'Quality Builders', 
        price: 0.80,
        rating: 4.7,
        delivery: 'Available',
        deliveryTime: '1-3 days',
        minimumOrder: 1000
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Robert K.',
        rating: 5,
        date: '2023-11-05',
        comment: 'Beautiful color and consistent size. Perfect for my garden wall project.'
      },
      {
        id: 2,
        user: 'Linda P.',
        rating: 4,
        date: '2023-10-22',
        comment: 'Good quality bricks, though a few were chipped in the batch I received.'
      }
    ],
    relatedProducts: [1, 3, 4]
  },
  {
    id: 3,
    name: 'TMT Steel Rebars',
    slug: 'tmt-steel-rebars-grade-500',
    category: 'steel',
    description: 'High-strength TMT steel rebars for reinforced concrete structures. These rebars feature Thermo-Mechanically Treated technology for superior strength, ductility and earthquake resistance.',
    price: 12.3,
    unit: 'kg',
    brand: 'SteelForce',
    inStock: true,
    rating: 4.9,
    reviewCount: 76,
    image: 'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg',
    images: [
      'https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg',
      'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg'
    ],
    specifications: {
      'Type': 'TMT (Thermo-Mechanically Treated)',
      'Grade': 'Fe-500',
      'Diameter': '8mm, 10mm, 12mm, 16mm, 20mm',
      'Length': '12m standard',
      'Yield Strength': '>500 MPa',
      'Bendability': 'Excellent'
    },
    sellers: [
      { 
        id: 1, 
        name: 'BuildSupply Co.', 
        price: 12.3,
        rating: 4.8,
        delivery: 'Available',
        deliveryTime: '2-3 days',
        minimumOrder: 100
      },
      { 
        id: 6, 
        name: 'Steel Solutions', 
        price: 12.5,
        rating: 4.9,
        delivery: 'Available',
        deliveryTime: '1-2 days',
        minimumOrder: 50
      },
      { 
        id: 7, 
        name: 'Metal Works Inc', 
        price: 12.25,
        rating: 4.7,
        delivery: 'Available',
        deliveryTime: '3-5 days',
        minimumOrder: 200
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'James N.',
        rating: 5,
        date: '2023-12-08',
        comment: 'Excellent quality steel with perfect ribbing for concrete bonding.'
      },
      {
        id: 2,
        user: 'David W.',
        rating: 5,
        date: '2023-11-15',
        comment: 'These TMT bars have great strength and are easy to bend when needed.'
      }
    ],
    relatedProducts: [1, 2, 5]
  }
];

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  
  // Find the product with the matching slug
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(product);
}