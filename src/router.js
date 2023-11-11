const express = require('express');
const { getAlunos } = require('./controllers');

const router = express();

router.get('/', getAlunos);

module.exports = router;
