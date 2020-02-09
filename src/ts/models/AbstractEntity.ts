import { DAO } from './index';

export class AbstractEntity {
  public insert(): void {
    DAO.insert(this);
  }

  public delete(): void {
    DAO.delete(this);
  }

  public static getData(): any {
    return DAO.getData();
  }
}
