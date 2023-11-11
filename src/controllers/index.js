const db = require('../database');

const getAlunos = (req, res) => {
  const q = 'SELECT * FROM alunos';
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

module.exports = { getAlunos };
