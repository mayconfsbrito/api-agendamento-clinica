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
        this._filePath = `${__dirname}/data-test.json`;
    }
    insert(obj) { }
    getData() {
        // const fileData = fs.createReadStream(this._filePath);
        return JSON.parse(fs.readFileSync(this._filePath, 'utf-8'));
    }
}
exports.DAO = DAO;
