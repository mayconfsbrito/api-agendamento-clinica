const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const isProduction =
  process.env.NODE_ENV != null && process.env.NODE_ENV.trim() === 'production';
exports.isProduction = isProduction;
exports.port = process.env.PORT;
exports.dataFileName = isProduction
  ? process.env.DATA_FILE_NAME_PROD
  : process.env.DATA_FILE_NAME_DEV;
