const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'lukaslimalkl',
  password: '4181',
  database: 'ESTAGIO_DB',
});

module.exports = db;
