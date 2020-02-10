import moment = require('moment');

export class DateHelper {
  public static getMomentDate(
    date: string | Date | moment.Moment
  ): moment.Moment {
    if (typeof date === `string` && date.match(/\d{2}:\d{2}/))
      return moment(date, 'DD-MM-YYYY HH:mm');
    return moment(date, 'DD-MM-YYYY');
  }

  public static isSameOrBefore(
    dateOne: string | Date | moment.Moment,
    dateTwo: string | Date | moment.Moment
  ): boolean {
    return DateHelper.getMomentDate(dateOne).isSameOrBefore(
      DateHelper.getMomentDate(dateTwo)
    );
  }

  public static isSameOrAfter(
    dateOne: string | Date | moment.Moment,
    dateTwo: string | Date | moment.Moment
  ): boolean {
    return DateHelper.getMomentDate(dateOne).isSameOrAfter(
      DateHelper.getMomentDate(dateTwo)
    );
  }

  public static parseString(date: Date): string {
    if (this.getMomentDate(date).isValid()) {
      return this.getMomentDate(date).format('DD-MM-YYYY');
    }
    return '';
  }

  public static getDate(date: string): Date {
    return new Date(DateHelper.getMomentDate(date).toDate());
  }

  public static isValid(date: Date | string): boolean {
    return this.getMomentDate(date).isValid();
  }
}
