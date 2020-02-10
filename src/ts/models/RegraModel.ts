import { DAO, AbstractEntity, Horario } from './index';
import { DateHelper } from '../utils/DateHelper';

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

  public setFromString(str: string): void {
    const obj = JSON.parse(str);
    this.diasSemana = obj[0].diasSemana;
    this.dia = DateHelper.getDate(obj[0].dia);
    this.horarios = obj[0].horarios;
  }
}
