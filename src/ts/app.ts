import express from 'express';
import morgan from 'morgan';

const app = express();
const config = require('../../config');
const regraRouter = require('./routes/RegrasRoute');

//if (!config.isProduction)
app.use(morgan('dev'));

app.use(express.json());
app.use('/api/v1/regras', regraRouter);

module.exports = app;
module.exports.config = config;
