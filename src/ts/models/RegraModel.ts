import { DAO, AbstractEntity } from './index';
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
  ): Array<object> {
    const regras = Regra.getRegras(dataInicio, dataFim);
    let horarios: object[] = [];
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
