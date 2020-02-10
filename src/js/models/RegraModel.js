"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const DateHelper_1 = require("../utils/DateHelper");
class Regra extends index_1.AbstractEntity {
    constructor(diasSemana, dia, horarios) {
        super();
        this.diasSemana = diasSemana;
        this.dia = dia;
        this.horarios = horarios;
        this.diasSemana = diasSemana;
        this.dia = dia;
        this.horarios = horarios;
    }
    static getHorariosDisponiveis(dataInicio, dataFim) {
        const regras = Regra.getRegras(dataInicio, dataFim);
        const horariosDisponiveis = [];
        regras.forEach(value => {
            const regra = value;
            const diaRegra = regra.dia === undefined ? new Date() : regra.dia;
            const dia = DateHelper_1.DateHelper.parseString(diaRegra);
            const horario = new index_1.Horario(dia, []);
            horario.addHorariosPorRegra(regra);
            horariosDisponiveis.push(horario);
        });
        return horariosDisponiveis;
    }
    static getRegras(dataInicio, dataFim) {
        let data = index_1.DAO.getData();
        data = data.filter((regra) => {
            return (DateHelper_1.DateHelper.isSameOrBefore(dataInicio, regra.dia) &&
                DateHelper_1.DateHelper.isSameOrAfter(dataFim, regra.dia));
        });
        return data;
    }
    static getRegrasHorario(dataInicio, dataFim) {
        let data = index_1.DAO.getData();
        data = data.filter((regra) => {
            return (DateHelper_1.DateHelper.isSameOrBefore(dataInicio, regra.dia) &&
                DateHelper_1.DateHelper.isSameOrAfter(dataFim, regra.dia));
        });
        return data;
    }
    isScheduled() {
        if (this.horarios === undefined)
            return false;
        const data = index_1.DAO.getData();
        for (let index = 0; index < this.horarios.length; index += 2) {
            const inicio = this._getDateTime(this, index);
            const fim = this._getDateTime(this, index + 1);
            for (let regind = 0; regind < data.length; regind += 1) {
                const regra = data[regind];
                const { horarios } = regra;
                if (horarios === undefined)
                    return false;
                for (let hrind = 0; hrind < horarios.length; hrind += 1) {
                    const regraInicio = this._getDateTime(regra, hrind);
                    const regraFim = this._getDateTime(regra, hrind + 1);
                    if (DateHelper_1.DateHelper.isSameOrBefore(inicio, regraInicio) &&
                        DateHelper_1.DateHelper.isSameOrAfter(fim, regraFim)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    setFromString(str) {
        const obj = JSON.parse(str);
        this.diasSemana = obj[0].diasSemana;
        this.dia = DateHelper_1.DateHelper.getDate(obj[0].dia);
        this.horarios = obj[0].horarios;
    }
    insert() {
        if (!this.isScheduled())
            super.insert();
        else
            throw new Error('Regra already scheduled!');
    }
    _getDateTime(regra, index = 0) {
        const dia = regra.dia || new Date();
        let str = `${DateHelper_1.DateHelper.parseString(dia)}`;
        if (regra.horarios !== undefined && regra.horarios[index] !== undefined)
            str += ` ${regra.horarios[index]}`;
        const datetime = DateHelper_1.DateHelper.getMomentDate(str);
        return datetime;
    }
}
exports.Regra = Regra;
