import { DAO, AbstractEntity, Horario } from './index';
import { DateHelper } from '../utils/DateHelper';

import moment = require('moment');

export class Regra extends AbstractEntity {
  constructor(
    public diasSemana?: Array<number>,
    public dia?: Date,
    public horarios?: Array<string>
  ) {
    super();
    this.diasSemana = diasSemana;
    this.dia = dia;
    this.horarios = horarios;
  }

  public clone(regra: Regra): void {
    this.diasSemana = regra.diasSemana;
    this.dia = regra.dia;
    this.horarios = regra.horarios;
  }

  public static getHorariosDisponiveis(
    dataInicio: string,
    dataFim: string
  ): Array<Horario> {
    const regras = Regra.getRegras(dataInicio, dataFim);
    const horariosDisponiveis: Array<Horario> = [];
    regras.forEach(value => {
      const regra = value as Regra;
      const diaRegra: Date = regra.dia === undefined ? new Date() : regra.dia;
      const dia = DateHelper.parseString(diaRegra);
      const horario = new Horario(dia, []);
      horario.addHorariosPorRegra(regra);
      horariosDisponiveis.push(horario);
    });
    return horariosDisponiveis;
  }

  public static getRegras(dataInicio: string, dataFim: string): Array<object> {
    let data = DAO.getData();
    data = data.filter((regra: any | Regra) => {
      return (
        DateHelper.isSameOrBefore(dataInicio, regra.dia) &&
        DateHelper.isSameOrAfter(dataFim, regra.dia)
      );
    });
    return data;
  }

  public static getRegrasHorario(
    dataInicio: string,
    dataFim: string
  ): Array<object> {
    let data = DAO.getData();
    data = data.filter((regra: any | Regra) => {
      return (
        DateHelper.isSameOrBefore(dataInicio, regra.dia) &&
        DateHelper.isSameOrAfter(dataFim, regra.dia)
      );
    });
    return data;
  }

  public isScheduled(): boolean {
    if (this.horarios === undefined) return false;
    const data = DAO.getData();
    for (let index = 0; index < this.horarios.length; index += 2) {
      const inicio = this._getDateTime(this, index);
      const fim = this._getDateTime(this, index + 1);
      for (let regind = 0; regind < data.length; regind += 1) {
        const regra = data[regind] as Regra;
        const { horarios } = regra;
        if (horarios === undefined) return false;
        for (let hrind = 0; hrind < horarios.length; hrind += 1) {
          const regraInicio = this._getDateTime(regra as Regra, hrind);
          const regraFim = this._getDateTime(regra as Regra, hrind + 1);
          if (
            DateHelper.isSameOrBefore(inicio, regraInicio) &&
            DateHelper.isSameOrAfter(fim, regraFim)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  public setFromString(str: string): void {
    const obj = JSON.parse(str);
    this.diasSemana = obj[0].diasSemana;
    this.dia = DateHelper.getDate(obj[0].dia);
    this.horarios = obj[0].horarios;
  }

  public insert(): void {
    if (!this.isScheduled()) super.insert();
    else throw new Error('Regra already scheduled!');
  }

  private _getDateTime(regra: Regra, index = 0): moment.Moment {
    const dia: Date = regra.dia || new Date();
    let str = `${DateHelper.parseString(dia)}`;
    if (regra.horarios !== undefined && regra.horarios[index] !== undefined)
      str += ` ${regra.horarios[index]}`;
    const datetime = DateHelper.getMomentDate(str);
    return datetime;
  }
}
