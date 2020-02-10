import * as fs from 'fs';
import { expect } from 'chai';
import { DAO, Regra, Horario } from '../src/ts/models/';
import 'mocha';

describe('RegraModel', () => {
  describe('#getRegras()', () => {
    it('get horarios by day', () => {
      const fileData = `[
  { "diasSemana": null, "dia": "01-01-2020", "horarios": ["08:00", "09:00", "10:00", "11:00"] },
  { "diasSemana": null, "dia": "01-01-2020", "horarios": ["13:00", "17:00"] },
  { "diasSemana": null, "dia": "02-01-2020", "horarios": ["13:00", "17:00"] },
  { "diasSemana": null, "dia": "01-02-2020", "horarios": ["13:00", "17:00"] }
]`;
      fs.writeFileSync(DAO._filePath, fileData);

      const result1 = Regra.getRegras('01-01-2020', '02-01-2020');
      expect(result1).length(3);

      const result2 = Regra.getRegras('01-01-2020', '01-01-2020');
      expect(result2).length(2);

      const result3 = Regra.getRegras('01-01-2019', '01-01-2019');
      expect(result3).length(0);
    });
  });

  describe('#getHorariosDisponiveis()', () => {
    it('get horarios by day', () => {
      const result1: Array<Horario> = Regra.getHorariosDisponiveis(
        '01-01-2020',
        '02-01-2020'
      );
      expect(result1).length(3);

      const result2: Array<Horario> = Regra.getHorariosDisponiveis(
        '02-01-2020',
        '02-01-2020'
      );
      expect(result2).length(1);
    });
  });

  describe('#isScheduled()', () => {
    it('should have scheduled regras', () => {
      const regra1 = new Regra();
      regra1.setFromString(
        '[{"diasSemana":null,"dia":"01-01-2020","horarios":["08:00", "09:00"]}]'
      );
      const regra2 = new Regra();
      regra2.setFromString(
        '[{"diasSemana":null,"dia":"02-01-2020","horarios":["13:30", "14:00"]}]'
      );

      expect(regra1.isScheduled()).to.equal(true);
      expect(regra2.isScheduled()).to.equal(true);
    });
    it('should have not scheduled regras', () => {
      const regra1 = new Regra();
      regra1.setFromString(
        '[{"diasSemana":null,"dia":"01-01-2020","horarios":["07:00", "07:59"]}]'
      );
      const regra2 = new Regra();
      regra2.setFromString(
        '[{"diasSemana":null,"dia":"03-01-2020","horarios":["08:00", "17:00"]}]'
      );
      expect(regra1.isScheduled()).to.equal(true);
    });
    it('should insert a new regra', () => {
      const regra1 = new Regra();
      const before = DAO.getData().length;
      regra1.setFromString(
        '[{"diasSemana":null,"dia":"10-01-2020","horarios":["08:00", "09:00"]}]'
      );
      regra1.insert();
      const after = DAO.getData().length;
      expect(before).to.lessThan(after);
    });
    it('should throw error by insert an already scheduled regra', () => {
      const regra1 = new Regra();
      regra1.setFromString(
        '[{"diasSemana":null,"dia":"01-01-2020","horarios":["08:00", "09:00"]}]'
      );
      expect(() => {
        regra1.insert();
      }).to.throw(Error);
      DAO.dropData();
    });
  });
});
