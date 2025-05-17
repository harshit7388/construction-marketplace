import { NextResponse } from 'next/server';

// Mock seller data - in a real app, this would come from MongoDB
const sellers = [
  {
    id: 1,
    name: 'BuildSupply Co.',
    slug: 'buildsupply-co',
    logo: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    description: 'A leading supplier of construction materials, specializing in cement, steel, and hardware.',
    rating: 4.8,
    reviews: 156,
    productCount: 1245,
    location: 'New York, NY',
    contact: {
      phone: '+1 (212) 555-1234',
      email: 'info@buildsupply.example.com',
      address: '123 Building Avenue, New York, NY 10001'
    },
    specialties: ['Cement', 'Steel', 'Hardware'],
    established: 2005,
    featured: true
  },
  {
    id: 2,
    name: 'Cement Direct',
    slug: 'cement-direct',
    logo: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    description: 'Cement specialists offering direct factory prices on all cement and concrete products.',
    rating: 4.7,
    reviews: 132,
    productCount: 430,
    location: 'Chicago, IL',
    contact: {
      phone: '+1 (312) 555-6789',
      email: 'sales@cementdirect.example.com',
      address: '456 Cement Road, Chicago, IL 60607'
    },
    specialties: ['Cement', 'Concrete', 'Aggregates'],
    established: 2010,
    featured: true
  },
  {
    id: 3,
    name: 'Construction Materials Ltd',
    slug: 'construction-materials-ltd',
    logo: 'https://images.pexels.com/photos/1418388/pexels-photo-1418388.jpeg',
    description: 'Full-service building materials supplier for contractors and homeowners.',
    rating: 4.6,
    reviews: 98,
    productCount: 785,
    location: 'Los Angeles, CA',
    contact: {
      phone: '+1 (213) 555-4321',
      email: 'contact@conmat.example.com',
      address: '789 Construction Blvd, Los Angeles, CA 90017'
    },
    specialties: ['Bricks', 'Blocks', 'Cement'],
    established: 1998,
    featured: true
  }
];

export async function GET(req: Request) {
  // Get URL to extract query parameters
  const { searchParams } = new URL(req.url);
  const featured = searchParams.get('featured') === 'true';
  const query = searchParams.get('q');
  
  let filteredSellers = [...sellers];
  
  // Filter by featured if specified
  if (featured) {
    filteredSellers = filteredSellers.filter(seller => seller.featured);
  }
  
  // Filter by search query if specified
  if (query) {
    const searchLower = query.toLowerCase();
    filteredSellers = filteredSellers.filter(
      seller => 
        seller.name.toLowerCase().includes(searchLower) ||
        seller.description.toLowerCase().includes(searchLower) ||
        seller.specialties.some(s => s.toLowerCase().includes(searchLower))
    );
  }
  
  return NextResponse.json(filteredSellers);
}