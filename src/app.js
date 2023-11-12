const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(router);
app.use;

module.exports = app;
