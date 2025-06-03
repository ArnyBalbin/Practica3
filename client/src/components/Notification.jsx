// src/components/Notification.js
'use client';
import { useCart } from '@/context/CartContext';

const Notification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  const bgColor = notification.type === 'success' 
    ? 'bg-green-500' 
    : notification.type === 'error' 
      ? 'bg-red-500' 
      : 'bg-blue-500';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`${bgColor} text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300`}>
        {notification.message}
      </div>
    </div>
  );
};

export default Notification;