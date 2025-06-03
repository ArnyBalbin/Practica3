import ProductList from '@/components/ProductList';
import { getProducts } from '@/lib/api';
import Link from 'next/link';

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Ecommerce</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descubre nuestra increíble selección de productos con las mejores ofertas
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
          <ProductList products={products.slice(0, 6)} />

          <div className="text-center mt-8">
            <Link href="/products" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Ver todos los productos</Link>
          </div>
        </div>
      </section>
    </div>
  );
}