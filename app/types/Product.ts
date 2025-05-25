export interface Product {
  id: number; // Unique identifier for the product
  name: string; // Name of the product
  slug: string; // URL-friendly identifier
  category: string; // Category the product belongs to
  description: string; // Description of the product
  price: number; // Price of the product
  unit: string; // Unit of measurement (e.g., bag, kg, piece)
  brand: string; // Brand of the product
  inStock: boolean; // Availability status
  rating: number; // Average rating of the product
  image: string; // URL of the product image
}
