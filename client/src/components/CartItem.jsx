'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const safePrice = Number(item.price) || 0;
  const safeQuantity = Number(item.quantity) || 1;

  return (
    <div className="flex p-4 border-b text-gray-800">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image 
          src={item.image_url || '/placeholder.jpg'} 
          alt={item.name} 
          fill
          className="object-cover rounded"
          sizes="80px"
        />
      </div>

      <div className="ml-4 flex-grow">
        <h3 className="font-medium text-lg text-gray-900">{item.name}</h3>
        <p className="text-gray-700 text-sm line-clamp-1">{item.description}</p>
        <p className="text-indigo-600 font-semibold">${safePrice.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center mt-2">
          <span className="text-gray-700 mr-2">Cantidad:</span>
          <input
            type="number"
            min="1"
            value={safeQuantity}
            onChange={(e) => {
              const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
              updateQuantity(item.id, newQuantity);
            }}
            className="w-16 px-2 py-1 border rounded text-center text-gray-900"
          />
        </div>

        <div className="font-semibold text-gray-900 mt-1">
          ${(safePrice * safeQuantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
