import { expect } from 'chai';
import 'mocha';
import { DAO } from '../src/ts/models/';

describe('DAO', () => {
  describe('#insertObject()', () => {
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

  describe('#dropData()', () => {
    it('drop data in the data file', () => {
      DAO.dropData();
      const data = DAO.getData();
      expect(JSON.stringify(data)).equal('[]');
    });
  });
});
