import moment from 'moment';
import axios from 'axios';
export function DateToStr(date){
    return moment(date).format("YYYY-MM-DD")
}
export const axiosInstance = axios.create({
    baseURL: "http://localhost/api"
});