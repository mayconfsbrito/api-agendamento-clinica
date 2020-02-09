"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class AbstractEntity {
    insert() {
        index_1.DAO.insert(this);
    }
    delete() {
        index_1.DAO.delete(this);
    }
    static getData() {
        return index_1.DAO.getData();
    }
}
exports.AbstractEntity = AbstractEntity;
