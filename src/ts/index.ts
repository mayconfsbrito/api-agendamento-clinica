import morgan from 'morgan';
import express from 'express';

const app = express();
const config = require('../../config');

console.log(config);

if (!config.isProduction) app.use(morgan('dev'));

app.listen(config.port, () => {
  console.log(`App runing on port ${config.port}...`);
});
