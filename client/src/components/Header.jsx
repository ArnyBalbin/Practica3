// src/components/Header.js
'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cart = [], cartCount } = useCart(); // Usamos cart en lugar de cartItems
  
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ecommerce
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/products" className="hover:text-gray-300 transition">
            Productos
          </Link>
          <Link href="/cart" className="relative hover:text-gray-300 transition">
            Carrito
            {/* Usamos cartCount en lugar de calcular manualmente */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;