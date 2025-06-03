import express from 'express';
import cors from 'cors';
import productRoutes from './routes/producto.routes.js';
import cartRoutes from './routes/carrito.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

// Manejo de errores
app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos conectada');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});