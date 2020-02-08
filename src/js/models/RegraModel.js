"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class Regra {
    // constructor(diasSemana: Array<number>, dia: Date, horarios: Array<Date>) {
    //   this.diasSemana = diasSemana;
    //   this.dia = dia;
    //   this.horarios = horarios;
    // }
    constructor(regra) {
        this.diasSemana = regra.diasSemana;
        this.dia = regra.dia;
        this.horarios = regra.horarios;
    }
    // public insertDia(regra: Regra) {
    //   console.log(this.dia);
    //   console.log(this.horarios);
    //   return true;
    // }
    // public insertSemanal(regra: Regra) {
    //   console.log(this.diasSemana);
    //   console.log(this.horarios);
    //   return true;
    // }
    // public insertDiario(regra: Regra) {
    //   console.log(this.horarios);
    //   return true;
    // }
    insert() {
        index_1.DAO.insert(this);
    }
}
exports.Regra = Regra;
