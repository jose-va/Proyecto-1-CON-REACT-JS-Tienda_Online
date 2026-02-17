import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Creamos el pool usando la URL completa
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Requerido para bases de datos en la nube como Render
  },
});

export const connectionDB = pool;

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});;
