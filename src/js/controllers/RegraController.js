"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
exports.getRegras = (req, res) => {
    res.status(200).json({});
};
exports.createRegra = (req, res) => {
    try {
        const regra = new models_1.Regra(req.body);
        console.log(regra);
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
        const regra = new models_1.Regra(req.body);
        regra.delete();
        res.status(200).json();
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
};
