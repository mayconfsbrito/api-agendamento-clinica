import moment = require('moment');

export class DateHelper {
  public static getMomentDate(date: string): moment.Moment {
    return moment(date, 'DD-MM-YYYY');
  }

  public static isSameOrBefore(dateOne: string, dateTwo: string): boolean {
    return DateHelper.getMomentDate(dateOne).isSameOrBefore(
      DateHelper.getMomentDate(dateTwo)
    );
  }

  public static isSameOrAfter(dateOne: string, dateTwo: string): boolean {
    return DateHelper.getMomentDate(dateOne).isSameOrAfter(
      DateHelper.getMomentDate(dateTwo)
    );
  }

  public static parseString(date: Date): string {
    return moment(date).format('DD-MM-YYYY');
  }

  public static getDate(date: string): Date {
    return new Date(DateHelper.getMomentDate(date).toDate());
  }
}
