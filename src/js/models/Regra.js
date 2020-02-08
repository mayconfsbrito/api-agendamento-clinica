"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegraModel {
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
    insertDia(regra) {
        console.log(this.dia);
        console.log(this.horarios);
        return true;
    }
    insertSemanal(regra) {
        console.log(this.diasSemana);
        console.log(this.horarios);
        return true;
    }
    insertDiario(regra) {
        console.log(this.horarios);
        return true;
    }
}
exports.RegraModel = RegraModel;
