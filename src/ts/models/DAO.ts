import * as fs from 'fs';
import * as lodash from 'lodash';

const config = require('../../../config');

export class DAO {
  private static _filePath = `${__dirname}\\..\\..\\..\\data\\${config.dataFileName}`;

  public static insert(obj: object): void {
    const data = DAO.getData();
    data.push(obj);
    fs.writeFileSync(DAO._filePath, JSON.stringify(data));
  }

  public static getData(): Array<object> {
    let data = fs.readFileSync(DAO._filePath, 'utf-8');
    if (data == null || data === '') data = '[]';
    return JSON.parse(data);
  }

  public static delete(obj: object): any {
    let data = DAO.getData();
    data = data.filter(el => lodash.isEqual(el, obj) === false);
    fs.writeFileSync(DAO._filePath, JSON.stringify(data));
  }

  public static dropData(): void {
    fs.writeFileSync(DAO._filePath, '[]');
  }

  public static getObject(obj: object): object | undefined {
    const data = DAO.getData();
    return data.find(el => lodash.isEqual(el, obj));
  }
}
