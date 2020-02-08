import { DAO } from './index';

export class Regra {
  private diasSemana: Array<number>;

  private dia: Date;

  private horarios: Array<Date>;

  // constructor(diasSemana: Array<number>, dia: Date, horarios: Array<Date>) {
  //   this.diasSemana = diasSemana;
  //   this.dia = dia;
  //   this.horarios = horarios;
  // }

  constructor(regra: Regra) {
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

  public insert(): void {
    DAO.insert(this);
  }
}
