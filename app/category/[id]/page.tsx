import CategoryContent from '@/components/category/category-content';
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
  return [
    { id: 'cement' },
    { id: 'bricks' },
    { id: 'steel' },
    { id: 'tiles' },
    { id: 'paints' },
    { id: 'tools' }
  ];
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Category: {params.id}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryContent categoryId={params.id} />
      </div>
    </main>
  );
}