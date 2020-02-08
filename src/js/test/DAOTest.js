"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const DAO_1 = require("../src/models/DAO");
describe('DAO', () => {
    describe('#getData()', () => {
        it('should return one or more objects', () => {
            const data = new DAO_1.DAO().getData();
            chai_1.expect(data.length).greaterThan(0);
        });
    });
    describe('#insertObject()', () => {
        it('should insert a new object in the data file', () => {
            const obj = {
                teste: true
            };
            const dao = new DAO_1.DAO();
            const lengthBefore = dao.getData().length;
            new DAO_1.DAO().insert(obj);
            const lengthAfter = dao.getData().length;
            chai_1.expect(lengthAfter).greaterThan(lengthBefore);
        });
    });
});
