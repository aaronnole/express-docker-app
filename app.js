const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

const clientes = [
  { id: 1, nombre: 'Ana Pérez' },
  { id: 2, nombre: 'Carlos López' },
  { id: 3, nombre: 'Sofía Gómez' }
];

const productos = [
  { id: 101, nombre: 'Laptop', precio: 1200 },
  { id: 102, nombre: 'Mouse', precio: 25 },
  { id: 103, nombre: 'Teclado', precio: 75 }
];

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(port, () => {
  console.log(`La aplicación se está ejecutando en el puerto ${port}`);
});