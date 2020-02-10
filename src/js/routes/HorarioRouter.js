"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const horarioController = require('../controllers/HorarioController');
const router = express_1.default.Router();
router.param('dataInicio', horarioController.checkParamDates);
router.param('dataFim', horarioController.checkParamDates);
router
    .route('/:dataInicio/:dataFim')
    .get(horarioController.getHorariosDisponiveis);
module.exports = router;
