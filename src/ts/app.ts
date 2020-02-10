import express from 'express';
import morgan from 'morgan';

const app = express();
const config = require('../../config');
const regraRouter = require('./routes/RegrasRouter');
const horarioRouter = require('./routes/HorarioRouter');

app.use(morgan('dev'));

app.use(express.json());
app.use('/api/v1/regras', regraRouter);
app.use('/api/v1/horarios', horarioRouter);

module.exports = app;
module.exports.config = config;
