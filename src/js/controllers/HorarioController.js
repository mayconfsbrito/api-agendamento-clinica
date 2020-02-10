"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
const DateHelper_1 = require("../utils/DateHelper");
exports.getHorariosDisponiveis = (req, res) => {
    try {
        const result = models_1.Regra.getHorariosDisponiveis(req.params.dataInicio, req.params.dataFim);
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        res.send(500);
    }
};
exports.checkParamDates = (req, res, next, value) => {
    if (!DateHelper_1.DateHelper.isValid(value))
        return next(new Error('Invalid dataInicio or dataFim parameters'));
    next();
};
