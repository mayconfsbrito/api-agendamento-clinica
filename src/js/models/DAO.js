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
const lodash = __importStar(require("lodash"));
const config = require('../../../config');
class DAO {
    static insert(obj) {
        const data = DAO.getData();
        data.push(obj);
        DAO._writeFile(data);
    }
    static getData() {
        let data = fs.readFileSync(DAO._filePath, 'utf-8');
        if (data == null || data === '')
            data = '[]';
        return JSON.parse(data);
    }
    static delete(obj) {
        let data = DAO.getData();
        data = data.filter(el => !DAO._compareTo(obj, el));
        DAO._writeFile(data);
    }
    static dropData() {
        fs.writeFileSync(DAO._filePath, '[]');
    }
    static getObject(obj) {
        const data = DAO.getData();
        return data.find(el => DAO._compareTo(obj, el));
    }
    static _writeFile(data) {
        fs.writeFileSync(DAO._filePath, DAO._stringfy(data));
    }
    static _stringfy(obj) {
        return JSON.stringify(obj, function (k, v) {
            return v === undefined ? null : v;
        });
    }
    static _compareTo(t, o) {
        return lodash.isEqual(DAO._stringfy(t), DAO._stringfy(o));
    }
}
exports.DAO = DAO;
DAO._filePath = `${__dirname}\\..\\..\\..\\data\\${config.dataFileName}`;
