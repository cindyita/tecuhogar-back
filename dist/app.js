"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoutes_1 = __importDefault(require("./Routes/UserRoutes"));
const ListRoutes_1 = __importDefault(require("./Routes/ListRoutes"));
const HomeRoutes_1 = __importDefault(require("./Routes/HomeRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowed_origins = [process.env.CORS_ORIGINS];
// Configuración de CORS
const corsOptions = {
    origin: allowed_origins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, cors_1.default)(corsOptions));
// Middleware
app.use(express_1.default.json());
// Rutas específicas
app.use('/users', UserRoutes_1.default);
app.use('/lists', ListRoutes_1.default);
app.use('/homes', HomeRoutes_1.default);
// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenid@ a la API de Tecuhogar.');
});
// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});
exports.default = app;
