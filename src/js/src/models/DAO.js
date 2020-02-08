"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const config = require('../../config.env.json')[process.env.NODE_ENV || 'development'];
class DAO {
    constructor() {
        this._filePath = `${__dirname}\\..\\..\\data\\${config.dataFileName}`;
    }
    insert(obj) {
        const data = this.getData();
        data.push(obj);
        fs.writeFileSync(this._filePath, JSON.stringify(data));
    }
    getData() {
        const data = fs.readFileSync(this._filePath, 'utf-8');
        return JSON.parse(data);
    }
}
exports.DAO = DAO;
