import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Mi Primer Endpoint
app.get('/', (req: Request, res: Response) => {
  console.log('¡Alguien accedió al endpoint raíz! 🌐');
  res.json({
    message: '¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀',
  });
});

// Iniciar el servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});

// https://localhost:3000/   >> ¡Hola, mundo! Este es un servidor Express con TypeScript. 🚀
