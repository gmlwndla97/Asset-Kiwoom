import Axios from '../core/Axios';

export default function getRealAccount(callback) {
    Axios('history/account', null, callback);
}
export {
    getRealAccount,
};