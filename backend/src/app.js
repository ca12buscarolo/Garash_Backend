import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Necesario para parsear el body en los futuros POST/PUT

// Rutas base
app.use('/api', indexRoutes);

export default app;
