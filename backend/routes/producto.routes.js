import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productoController.js';
import { productSchema, validate } from '../middlewares/validation.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', validate(productSchema), createProduct);
router.put('/:id', validate(productSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;