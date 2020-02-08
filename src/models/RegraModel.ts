export class Regra {
  constructor(
    private tipoIntervalo: string,
    private horarioInicio: Date,
    private horarioFim: Date
  ) {
    this.tipoIntervalo = tipoIntervalo;
    this.horarioInicio = horarioInicio;
    this.horarioFim = horarioFim;
  }

  public insert(regra: Regra) {
    console.log(this.tipoIntervalo);
    console.log(this.horarioInicio);
    console.log(this.horarioFim);
    return true;
  }
}
