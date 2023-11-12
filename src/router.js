const express = require('express');
const { getAlunos, postAlunos } = require('./controllers');
const router = express();

router.get('/alunos', getAlunos);
router.post('/cadastrar', postAlunos);

module.exports = router;
