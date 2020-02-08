import express from 'express';

const regraController = require('../controllers/RegraController');

const router = express.Router();

router
  .route('/')
  .get(regraController.getRegras)
  .post(regraController.createRegra)
  .delete(regraController.deleteRegra);

module.exports = router;
