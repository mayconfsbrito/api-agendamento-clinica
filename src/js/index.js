"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const config = require('../../config');
console.log(config);
if (!config.isProduction)
    app.use(morgan_1.default('dev'));
app.listen(config.port, () => {
    console.log(`App runing on port ${config.port}...`);
});
