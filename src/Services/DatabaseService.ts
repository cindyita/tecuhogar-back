import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const conn = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conn.getConnection()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => console.error('Error al conectar:', err));
