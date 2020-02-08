import * as fs from 'fs';

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

  public static dropData(): void {
    fs.writeFileSync(DAO._filePath, '[]');
  }
}
