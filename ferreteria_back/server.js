const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_ferreteria_react'
});

// Importar controladores
const productosController = require('./controllers/productosController');
const facturacionController = require('./controllers/facturacionController');
const clientesController = require('./controllers/clientesController');
const contactosController = require('./controllers/contactosController');
const rutasController = require('./controllers/rutasController');

// Definir rutas para productos
app.get('/api/productos', productosController.obtenerProductos);
app.post('/api/productos', productosController.crearProducto);
app.put('/api/productos/:id', productosController.modificarProducto);
app.delete('/api/productos/:id', productosController.borrarProducto);

// Definir rutas para facturación
app.get('/api/facturacion', facturacionController.obtenerFacturacion);
app.post('/api/facturacion', facturacionController.crearFacturacion);
app.put('/api/facturacion/:id', facturacionController.modificarFacturacion);
app.delete('/api/facturacion/:id', facturacionController.borrarFacturacion);

// Definir rutas para clientes
app.get('/api/clientes', clientesController.obtenerClientes);
app.post('/api/clientes', clientesController.crearCliente);
app.put('/api/clientes/:id', clientesController.modificarCliente);
app.delete('/api/clientes/:id', clientesController.borrarCliente);

// Definir rutas para contactos
app.get('/api/contactos', contactosController.obtenerContactos);
app.post('/api/contactos', contactosController.crearContacto);
app.put('/api/contactos/:id', contactosController.modificarContacto);
app.delete('/api/contactos/:id', contactosController.borrarContacto);

// Definir rutas para rutas
app.get('/api/rutas', rutasController.obtenerRutas);
app.post('/api/rutas', rutasController.crearRuta);
app.put('/api/rutas/:id', rutasController.modificarRuta);
app.delete('/api/rutas/:id', rutasController.borrarRuta);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
