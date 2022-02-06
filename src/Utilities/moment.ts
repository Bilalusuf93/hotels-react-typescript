import moment from 'moment'
import { AppConstants } from '../appConstants';
export const toDateIsVaid = (toDate: string, fromDate: string): boolean => {
    return moment(toDate).isSameOrAfter(fromDate);
}

export const addDays = (
    date: string,
    numberOfDays: number
): string => {
    return moment(
        date,
        AppConstants.DATE_FORMAT
    )
        .add(numberOfDays, 'days')
        .format(AppConstants.DATE_FORMAT)
        .toString();
};