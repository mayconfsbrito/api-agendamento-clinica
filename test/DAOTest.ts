import { expect } from 'chai';
import 'mocha';
import { DAO } from '../src/ts/models/';

describe('DAO', () => {
  describe('#dropData()', () => {
    it('drop data in the data file', () => {
      DAO.dropData();
      const data = DAO.getData();
      expect(JSON.stringify(data)).equal('[]');
    });
  });

  describe('#insert()', () => {
    it('should insert a new object in the data file', () => {
      const obj: any = {
        teste: true
      };
      const lengthBefore = DAO.getData().length;
      DAO.insert(obj);
      const lengthAfter = DAO.getData().length;
      expect(lengthAfter).greaterThan(lengthBefore);
    });
  });

  describe('#delete()', () => {
    it('should have one object less than the data file had before delete', () => {
      const obj: any = {
        teste: true
      };
      const lengthBefore = DAO.getData().length;
      DAO.delete(obj);
      const lengthAfter = DAO.getData().length;
      expect(lengthAfter).lessThan(lengthBefore);
    });
  });
});
