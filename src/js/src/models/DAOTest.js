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
class DAO {
    constructor() {
        this._filePath = `${__dirname}\\..\\..\\data\\data-test.json`;
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
