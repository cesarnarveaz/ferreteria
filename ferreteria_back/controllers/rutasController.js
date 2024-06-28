const mysql = require('mysql');

// Obtener todas las rutas
exports.obtenerRutas = (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('SELECT * FROM rutas', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al obtener las rutas');
    } else {
      res.json(results);
    }
    connection.end();
  });
};

// Crear una nueva ruta
exports.crearRuta = (req, res) => {
  const { origen, destino, distancia } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('INSERT INTO rutas (origen, destino, distancia) VALUES (?, ?, ?)', [origen, destino, distancia], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear la ruta');
    } else {
      res.status(201).send('Ruta creada');
    }
    connection.end();
  });
};

// Modificar una ruta
exports.modificarRuta = (req, res) => {
  const { id } = req.params;
  const { origen, destino, distancia } = req.body;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('UPDATE rutas SET origen = ?, destino = ?, distancia = ? WHERE id = ?', [origen, destino, distancia, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al modificar la ruta');
    } else {
      res.send('Ruta modificada');
    }
    connection.end();
  });
};

// Borrar una ruta
exports.borrarRuta = (req, res) => {
  const { id } = req.params;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ferreteria_react'
  });

  connection.query('DELETE FROM rutas WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar la ruta');
    } else {
      res.send('Ruta borrada');
    }
    connection.end();
  });
};
