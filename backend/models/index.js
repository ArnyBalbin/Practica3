import sequelize from '../config/db.js';
import ProductModel from './producto.js';
import CartModel from './carrito.js';
import CartItemModel from './itemCarrito.js';

const Product = ProductModel(sequelize);
const Cart = CartModel(sequelize);
const CartItem = CartItemModel(sequelize);

// Relaciones
Cart.belongsToMany(Product, { through: CartItem, foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartItem, foreignKey: 'productId' });

export {
  sequelize,
  Product,
  Cart,
  CartItem
};