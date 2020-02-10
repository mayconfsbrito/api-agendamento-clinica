"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
exports.getRegras = (req, res) => {
    const data = models_1.Regra.getData();
    res.status(200).json(data);
};
exports.createRegra = (req, res) => {
    try {
        const regra = new models_1.Regra();
        regra.clone(req.body);
        regra.insert();
        res.status(201).json(regra);
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
};
exports.deleteRegra = (req, res) => {
    try {
        const regra = new models_1.Regra();
        regra.clone(req.body);
        regra.delete();
        res.status(200).json();
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
};
