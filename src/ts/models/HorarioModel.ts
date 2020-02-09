/* eslint-disable max-classes-per-file */
import { Regra } from './index';
import { DateHelper } from '../utils/DateHelper';

class Intervals {
  constructor(public start: string, public end: string) {
    this.start = start;
    this.end = end;
  }
}

export class Horario {
  constructor(public day: string, public intervals: Array<Intervals>) {
    this.day = day;
    this.intervals = intervals;
  }

  public addHorariosPorRegra(regra: Regra): void {
    if (regra.horarios === undefined) return;
    for (let index = 0; index < regra.horarios.length; index += 2) {
      const interval = new Intervals(
        regra.horarios[index],
        regra.horarios[index + 1]
      );
      this.intervals.push(interval);
    }
  }
}
