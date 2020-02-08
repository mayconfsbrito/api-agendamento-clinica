import { AbstractEntity } from './AbstractEntity';

export class Regra extends AbstractEntity {
  private diasSemana: Array<number>;

  private dia: Date;

  private horarios: Array<Date>;

  constructor(regra: Regra) {
    super();
    this.diasSemana = regra.diasSemana;
    this.dia = regra.dia;
    this.horarios = regra.horarios;
  }
}
