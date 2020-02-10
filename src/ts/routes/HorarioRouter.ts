import express from 'express';

const horarioController = require('../controllers/HorarioController');

const router = express.Router();

router.param('dataInicio', horarioController.checkParamDates);
router.param('dataFim', horarioController.checkParamDates);

router
  .route('/:dataInicio/:dataFim')
  .get(horarioController.getHorariosDisponiveis);

module.exports = router;
