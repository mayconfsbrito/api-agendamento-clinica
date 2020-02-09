"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class DateHelper {
    static getMomentDate(date) {
        return moment(date, 'DD-MM-YYYY');
    }
    static isSameOrBefore(dateOne, dateTwo) {
        return DateHelper.getMomentDate(dateOne).isSameOrBefore(DateHelper.getMomentDate(dateTwo));
    }
    static isSameOrAfter(dateOne, dateTwo) {
        return DateHelper.getMomentDate(dateOne).isSameOrAfter(DateHelper.getMomentDate(dateTwo));
    }
    static parseString(date) {
        return moment(date).format('DD-MM-YYYY');
    }
    static getDate(date) {
        return new Date(DateHelper.getMomentDate(date).toDate());
    }
}
exports.DateHelper = DateHelper;
