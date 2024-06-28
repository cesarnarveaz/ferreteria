const mysql = require('mysql');

// Obtener todos los productos
exports.obtenerProductos = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los productos');
    } else {
      res.json(results);
    }
    connection.end();
  });
};

// Crear un nuevo producto
exports.crearProducto = (req, res) => {
  const { nombre, descripcion } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('INSERT INTO productos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear el producto');
    } else {
      res.status(201).send('Producto creado');
    }
    connection.end();
  });
};

// Modificar un producto
exports.modificarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('UPDATE productos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al modificar el producto');
    } else {
      res.send('Producto modificado');
    }
    connection.end();
  });
};

// Borrar un producto
exports.borrarProducto = (req, res) => {
  const { id } = req.params;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('DELETE FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar el producto');
    } else {
      res.send('Producto borrado');
    }
    connection.end();
  });
};
