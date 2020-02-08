import * as fs from 'fs';
const config = require('../../config.env.json')[
  process.env.NODE_ENV || 'development'
];

export class DAO {
  private _filePath = `${__dirname}\\..\\..\\data\\${config.dataFileName}`;

  public insert(obj: object): void {
    const data = this.getData();
    data.push(obj);
    fs.writeFileSync(this._filePath, JSON.stringify(data));
  }

  public getData(): Array<object> {
    const data = fs.readFileSync(this._filePath, 'utf-8');
    return JSON.parse(data);
  }
}
