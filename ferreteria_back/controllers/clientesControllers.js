const mysql = require('mysql');

// Obtener todos los clientes
exports.obtenerClientes = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los clientes');
    } else {
      res.json(results);
    }
    connection.end();
  });
};

// Crear un nuevo cliente
exports.crearCliente = (req, res) => {
  const { nombre, direccion, telefono } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('INSERT INTO clientes (nombre, direccion, telefono) VALUES (?, ?, ?)', [nombre, direccion, telefono], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear el cliente');
    } else {
      res.status(201).send('Cliente creado');
    }
    connection.end();
  });
};

// Modificar un cliente
exports.modificarCliente = (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('UPDATE clientes SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?', [nombre, direccion, telefono, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al modificar el cliente');
    } else {
      res.send('Cliente modificado');
    }
    connection.end();
  });
};

// Borrar un cliente
exports.borrarCliente = (req, res) => {
  const { id } = req.params;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar el cliente');
    } else {
      res.send('Cliente borrado');
    }
    connection.end();
  });
};
