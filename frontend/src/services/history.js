import Axios from '../core/Axios';

function getRealAccount(callback) {
    Axios('history/account', null, callback);
}

function getNotSignedStock(callback) {
    Axios('history/notSigned', null, callback);
}

export {
    getRealAccount,
    getNotSignedStock,
};