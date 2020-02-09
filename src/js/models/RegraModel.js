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
        let horarios = [];
        regras.forEach((value, index, array) => {
            // const regra = value as Regra;
            // const dia = DateHelper.parseString(regra.dia);
            // const horario = new Horario(dia, []);
            // horario.addHorariosPorRegra(regra);
            // const horario = new HorarioModel(dia, ['']);
            // if (horarios[dia] === undefined) horarios[dia] = [];
            // if (horarios.day[dia] === undefined) horarios.day[dia] = [];
            // horarios.day[dia].push(regra.horarios);
        });
        return [];
    }
    static getRegras(dataInicio, dataFim) {
        let data = index_1.DAO.getData();
        data = data.filter((regra) => {
            return (DateHelper_1.DateHelper.isSameOrBefore(dataInicio, regra.dia) &&
                DateHelper_1.DateHelper.isSameOrAfter(dataFim, regra.dia));
        });
        return data;
    }
    setFromString(str) {
        const obj = JSON.parse(str);
        this.diasSemana = obj[0].diasSemana;
        this.dia = DateHelper_1.DateHelper.getDate(obj[0].dia);
        this.horarios = obj[0].horarios;
    }
}
exports.Regra = Regra;
