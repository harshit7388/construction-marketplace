"use client";

import { Card } from "@/components/ui/card";

export default function CategoryContent({ categoryId }: { categoryId: string }) {
  return (
    <Card className="p-6">
      <p className="text-gray-600">Loading products for {categoryId}...</p>
    </Card>
  );
}