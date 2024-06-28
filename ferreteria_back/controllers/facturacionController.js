const mysql = require('mysql');

// Obtener todos los registros de facturación
exports.obtenerFacturacion = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('SELECT * FROM facturacion', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener los registros de facturación');
    } else {
      res.json(results);
    }
    connection.end();
  });
};

// Crear un nuevo registro de facturación
exports.crearFacturacion = (req, res) => {
  const { cliente, monto } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('INSERT INTO facturacion (cliente, monto) VALUES (?, ?)', [cliente, monto], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear el registro de facturación');
    } else {
      res.status(201).send('Registro de facturación creado');
    }
    connection.end();
  });
};

// Modificar un registro de facturación
exports.modificarFacturacion = (req, res) => {
  const { id } = req.params;
  const { cliente, monto } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('UPDATE facturacion SET cliente = ?, monto = ? WHERE id = ?', [cliente, monto, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al modificar el registro de facturación');
    } else {
      res.send('Registro de facturación modificado');
    }
    connection.end();
  });
};

// Borrar un registro de facturación
exports.borrarFacturacion = (req, res) => {
  const { id } = req.params;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('DELETE FROM facturacion WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar el registro de facturación');
    } else {
      res.send('Registro de facturación borrado');
    }
    connection.end();
  });
};
