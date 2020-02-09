import * as fs from 'fs';
import * as lodash from 'lodash';

const config = require('../../../config');

export class DAO {
  public static _filePath = `${__dirname}\\..\\..\\..\\data\\${config.dataFileName}`;

  public static insert(obj: object): void {
    const data = DAO.getData();
    data.push(obj);
    DAO._writeFile(data);
  }

  public static getData(): Array<object> {
    let data = fs.readFileSync(DAO._filePath, 'utf-8');
    if (data == null || data === '') data = '[]';
    return JSON.parse(data);
  }

  public static delete(obj: object): any {
    let data = DAO.getData();
    data = data.filter(el => !DAO._compareTo(obj, el));
    DAO._writeFile(data);
  }

  public static dropData(): void {
    fs.writeFileSync(DAO._filePath, '[]');
  }

  public static getObject(obj: object): object | undefined {
    const data = DAO.getData();
    return data.find(el => DAO._compareTo(obj, el));
  }

  private static _writeFile(data: Array<object>): void {
    fs.writeFileSync(DAO._filePath, DAO._stringfy(data));
  }

  private static _stringfy(obj: any): string {
    return JSON.stringify(obj, function(k, v) {
      return v === undefined ? null : v;
    });
  }

  private static _compareTo(t: object, o: object): boolean {
    return lodash.isEqual(DAO._stringfy(t), DAO._stringfy(o));
  }
}
