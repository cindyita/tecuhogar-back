import express, { Application } from 'express';
import dotenv from 'dotenv';
import UserRoutes from './Routes/UserRoutes';
import ListRoutes from './Routes/ListRoutes';
import HomeRoutes from './Routes/HomeRoutes';
import cors from 'cors';

dotenv.config();

const app: Application = express();

const allowed_origins = [process.env.CORS_ORIGINS];

// Configuración de CORS
const corsOptions = {
  origin: allowed_origins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Rutas específicas
app.use('/users', UserRoutes);
app.use('/lists', ListRoutes);
app.use('/homes', HomeRoutes);

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('Bienvenid@ a la API de Tecuhogar.');
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

export default app;
