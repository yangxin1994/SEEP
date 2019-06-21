import axios from 'axios';
import qs from 'qs';

export const loginHttps = params => {return axios.post(`/api/vue/vLogin.html`, qs.stringify(params)).then(res => res.data);}