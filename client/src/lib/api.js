const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Operaciones CRUD para productos
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error('Error al obtener productos');
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Producto no encontrado');
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!response.ok) throw new Error('Error al crear producto');
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!response.ok) throw new Error('Error al actualizar producto');
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Error al eliminar producto');
  return response.json();
};

// Operaciones para el carrito (simuladas localmente)
export const processOrder = async (cart) => {
  // En una implementación real, aquí se enviaría al backend
  return new Promise(resolve => setTimeout(() => {
    resolve({ 
      success: true, 
      orderId: `ORD-${Date.now()}`,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  }, 1000));
};