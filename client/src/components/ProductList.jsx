// src/components/ProductList.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-xl">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link href={`/products/${product.id}`}>
            <div className="relative h-48 w-full">
              <Image
                src={product.image_url || '/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          <div className="p-4 flex flex-col justify-between flex-grow">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-indigo-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-2 border-t">
              <span className="text-indigo-600 text-lg font-semibold">
                ${Number(product.price).toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;