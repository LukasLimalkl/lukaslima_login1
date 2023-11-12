const db = require('../database');

const getAlunos = (req, res) => {
  const q = 'SELECT * FROM alunos';
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const postAlunos = (req, res) => {
  const username = req.body.usuario;
  const password = req.body.senha;
  const email = req.body.email;
  const nomeCompleto = req.body.nomeCompleto;

  const sql =
    'INSERT INTO alunos (nome_Completo, usuario, email, senha) VALUES (?, ?, ?, ?)';

  db.query(sql, [nomeCompleto, email, username, password], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao inserir aluno no MySQL');
      return;
    }
    res.status(200).json({
      id: result.insertId,
      mensagem: 'Aluno inserido com sucesso no MySQL',
    });
  });
};

module.exports = {
  getAlunos,
  postAlunos,
};
