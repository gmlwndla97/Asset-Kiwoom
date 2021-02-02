import Axios from '../core/Axios';

export default function login(callback) {
    Axios('user', null, callback);
}