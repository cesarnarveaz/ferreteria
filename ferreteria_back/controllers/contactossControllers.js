const mysql = require('mysql');

// Obtener todos los contactos
exports.obtenerContactos = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('SELECT * FROM contactos', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los contactos');
    } else {
      res.json(results);
    }
    connection.end();
  });
};

// Crear un nuevo contacto
exports.crearContacto = (req, res) => {
  const { nombre, email, telefono } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('INSERT INTO contactos (nombre, email, telefono) VALUES (?, ?, ?)', [nombre, email, telefono], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear el contacto');
    } else {
      res.status(201).send('Contacto creado');
    }
    connection.end();
  });
};

// Modificar un contacto
exports.modificarContacto = (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('UPDATE contactos SET nombre = ?, email = ?, telefono = ? WHERE id = ?', [nombre, email, telefono, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al modificar el contacto');
    } else {
      res.send('Contacto modificado');
    }
    connection.end();
  });
};

// Borrar un contacto
exports.borrarContacto = (req, res) => {
  const { id } = req.params;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('DELETE FROM contactos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar el contacto');
    } else {
      res.send('Contacto borrado');
    }
    connection.end();
  });
};
