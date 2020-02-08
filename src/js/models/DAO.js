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
const config = require('../../../config');
class DAO {
    static insert(obj) {
        const data = DAO.getData();
        data.push(obj);
        fs.writeFileSync(DAO._filePath, JSON.stringify(data));
    }
    static getData() {
        let data = fs.readFileSync(DAO._filePath, 'utf-8');
        if (data == null || data === '')
            data = '[]';
        return JSON.parse(data);
    }
    static dropData() {
        fs.writeFileSync(DAO._filePath, '[]');
    }
}
exports.DAO = DAO;
DAO._filePath = `${__dirname}\\..\\..\\..\\data\\${config.dataFileName}`;
