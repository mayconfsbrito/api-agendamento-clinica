"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const config = require('../../config');
const regraRouter = require('./routes/RegrasRoute');
if (!config.isProduction)
    app.use(morgan_1.default('dev'));
app.use('/api/v1/regras', regraRouter);
module.exports = app;
module.exports.config = config;
