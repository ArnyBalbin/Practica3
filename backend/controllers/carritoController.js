import { Cart, Product, CartItem } from '../models/index.js';

export const createCart = async (req, res) => {
  try {
    const cart = await Cart.create();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    
    const cart = await Cart.findByPk(cartId);
    const product = await Product.findByPk(productId);
    
    if (!cart || !product) {
      return res.status(404).json({ error: 'Cart or Product not found' });
    }
    
    const [cartItem] = await CartItem.findOrCreate({
      where: { cartId, productId },
      defaults: { quantity: req.body.quantity || 1 }
    });
    
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: {
        model: Product,
        through: { attributes: ['quantity'] }
      }
    });
    
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    
    // Calcular total
    const total = cart.Products.reduce((sum, product) => {
      return sum + (product.price * product.CartItem.quantity);
    }, 0);
    
    res.json({ cart, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;
    const cartItem = await CartItem.findOne({
      where: { cartId, id: itemId }
    });
    
    if (!cartItem) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    await cartItem.update({ quantity: req.body.quantity });
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;
    const deleted = await CartItem.destroy({
      where: { cartId, id: itemId }
    });
    
    if (!deleted) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};