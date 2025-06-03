import express from 'express';
import {
  createCart,
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart
} from '../controllers/carritoController.js';
import { cartItemSchema, validate } from '../middlewares/validation.js';

const router = express.Router();

router.post('/', createCart);
router.post('/:cartId/items/:productId', validate(cartItemSchema), addToCart);
router.get('/:id', getCart);
router.put('/:cartId/items/:itemId', validate(cartItemSchema), updateCartItem);
router.delete('/:cartId/items/:itemId', removeFromCart);

export default router;