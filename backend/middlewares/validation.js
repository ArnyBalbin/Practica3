import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500),
  price: Joi.number().positive().precision(2).required(),
  stock: Joi.number().integer().min(0).required()
});

// Esquema para ítems del carrito
export const cartItemSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required()
});

export function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}