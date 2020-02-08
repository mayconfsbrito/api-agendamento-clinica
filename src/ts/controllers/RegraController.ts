import { Regra } from '../models/';

exports.getRegras = (req: any, res: any) => {
  res.status(200).json({});
};

exports.createRegra = (req: any, res: any) => {
  try {
    const regra = new Regra(req.body);
    console.log(regra);
    regra.insert();
    res.status(201).json(regra);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
