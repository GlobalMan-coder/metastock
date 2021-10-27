import moment from 'moment';

export function DateToStr(date){
    return moment(date).format("YYYY-MM-DD")
}