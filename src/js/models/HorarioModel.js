"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Intervals {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.start = start;
        this.end = end;
    }
}
class Horario {
    constructor(day, intervals) {
        this.day = day;
        this.intervals = intervals;
        this.day = day;
        this.intervals = intervals;
    }
    addHorariosPorRegra(regra) {
        if (regra.horarios === undefined)
            return;
        for (let index = 0; index < regra.horarios.length; index += 2) {
            const interval = new Intervals(regra.horarios[index], regra.horarios[index + 1]);
            this.intervals.push(interval);
        }
    }
}
exports.Horario = Horario;
