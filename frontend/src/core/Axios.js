import axios from 'axios';

export default function Axios(url, param, callback) {
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/' + url + '/',
        params: param,
        withCredentials: true
    }).then(response => callback(response.data))
    .catch(error => alert(error));
}