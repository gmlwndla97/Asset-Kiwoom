import Axios from '../core/Axios';
import Socket from '../core/Socket';

function getStock(value, callback) {
    Axios('stock/current', value, callback);
}

function getFavoriteStock(value, callback) {
    Axios('stock/favorite', value, callback);
}

function getRealStock(callback) {
    return Socket('stock/real', callback);
}

export {
    getStock,
    getFavoriteStock,
    getRealStock,
};