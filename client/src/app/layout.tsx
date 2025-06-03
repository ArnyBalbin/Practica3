import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';
import Notification from '@/components/Notification';

export const metadata = {
  title: 'Explorador E-commerce',
  description: 'Tienda en línea con Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              {children}
            </main>
            <footer className="bg-gray-800 text-white py-6">
              <div className="container mx-auto px-4 text-center">
                <p>© 2025 Explorador E-commerce - Todos los derechos reservados</p>
              </div>
            </footer>
          </div>
          <Notification />
        </CartProvider>
      </body>
    </html>
  );
}