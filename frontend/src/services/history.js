import Axios from '../core/Axios';

export default function getAccount(callback) {
    Axios('history/account', null, callback);
}
export {
    getAccount,
};