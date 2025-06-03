// src/app/products/[id]/page.js
import ProductForm from '@/components/ProductForm';
import { getProductById } from '@/lib/api';

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params.id);
  
  return (
    <div className="py-8">
      <ProductForm initialData={product} />
    </div>
  );
}