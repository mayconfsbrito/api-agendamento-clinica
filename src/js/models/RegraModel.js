"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractEntity_1 = require("./AbstractEntity");
class Regra extends AbstractEntity_1.AbstractEntity {
    constructor(regra) {
        super();
        this.diasSemana = regra.diasSemana;
        this.dia = regra.dia;
        this.horarios = regra.horarios;
    }
}
exports.Regra = Regra;
