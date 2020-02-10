import { Regra } from '../models/';
import { DateHelper } from '../utils/DateHelper';

exports.getHorariosDisponiveis = (req: any, res: any) => {
  try {
    const result = Regra.getHorariosDisponiveis(
      req.params.dataInicio,
      req.params.dataFim
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
};

exports.checkParamDates = (req: any, res: any, next, value) => {
  if (!DateHelper.isValid(value))
    return next(new Error('Invalid dataInicio or dataFim parameters'));
  next();
};
