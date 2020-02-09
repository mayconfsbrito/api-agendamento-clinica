import { expect } from 'chai';
import { Regra, Horario } from '../src/ts/models/';
import 'mocha';

describe('RegraModel', () => {
  describe('#addHorariosPorRegra()', () => {
    it('create a horario object with multiples intervals', () => {
      const regra1 = new Regra();
      regra1.setFromString(
        '[{"diasSemana":null,"dia":"01-01-2020","horarios":["08:00", "09:00", "10:00","11:00"]}]'
      );
      const horario = new Horario('01-01-2020', []);
      horario.addHorariosPorRegra(regra1);
      expect(horario.intervals[0].start).equal('08:00');
      expect(horario.intervals[1].end).equal('11:00');
    });
  });
});
