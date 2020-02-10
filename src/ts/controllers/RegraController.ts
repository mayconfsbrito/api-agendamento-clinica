import { Regra } from '../models/';

exports.getRegras = (req: any, res: any) => {
  const data = Regra.getData();
  res.status(200).json(data);
};

exports.createRegra = (req: any, res: any) => {
  try {
    const regra = new Regra();
    regra.clone(req.body);
    regra.insert();
    res.status(201).json(regra);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

exports.deleteRegra = (req: any, res: any) => {
  try {
    const regra = new Regra();
    regra.clone(req.body);
    regra.delete();
    res.status(200).json();
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
