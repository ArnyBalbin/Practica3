'use client';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  // Usa 'cart' en lugar de 'cartItems' para coincidir con tu contexto
  const { cart = [], cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito está Vacío</h1>
        <p className="text-gray-600 mb-8">
          Explora nuestros productos y añade algunos artículos a tu carrito
        </p>
        <Link 
          href="/products" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Vaciar Carrito
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Resumen del Pedido</h2>
          
          <div className="space-y-3 mb-6 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            
            <div className="flex justify-between font-bold text-lg pt-3 border-t">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Proceder al Pago
          </button>
          
          <div className="mt-4 text-center">
            <Link 
              href="/products" 
              className="text-indigo-600 hover:text-indigo-800"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}