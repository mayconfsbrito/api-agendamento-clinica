import { expect } from 'chai';
import 'mocha';
import { DAO } from '../src/models/DAO';

describe('DAO', () => {
  describe('#getData()', () => {
    it('should return one or more objects', () => {
      const data = new DAO().getData();
      expect(data.length).greaterThan(0);
    });
  });

  describe('#insertObject()', () => {
    it('should insert a new object in the data file', () => {
      const obj: any = {
        teste: true
      };
      const dao = new DAO();
      const lengthBefore = dao.getData().length;
      new DAO().insert(obj);
      const lengthAfter = dao.getData().length;
      expect(lengthAfter).greaterThan(lengthBefore);
    });
  });
});
