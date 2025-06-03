// src/app/products/page.js
import ProductList from '@/components/ProductList';
import { getProducts } from '@/lib/api';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Todos los Productos</h1>
        <Link 
          href="/products/new" 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Nuevo Producto
        </Link>
      </div>
      
      <ProductList products={products} />
    </div>
  );
}