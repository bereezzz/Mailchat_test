 import axios from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;
axios.defaults.headers.common = {version: "0.0"};
export const wrapper = (method: "post" | "get" | "put" | "delete", url: string, data?: any) => axios.request({method, url, data}).then(checkResponse).catch(catchError);
