import express from 'express';
import morgan from 'morgan';

const app = express();
const config = require('../../config');
if (!config.isProduction) app.use(morgan('dev'));

app.use('/api/v1/regras', () => {});

module.exports = app;
module.exports.config = config;
