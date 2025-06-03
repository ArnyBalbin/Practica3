import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const CartItem = sequelize.define('CartItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'cart_items',
    timestamps: true
  });

  return CartItem;
};