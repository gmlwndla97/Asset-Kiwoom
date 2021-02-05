import Axios from '../core/Axios';

function getStock(value, callback) {
    Axios('stock/current', value, callback);
}

function getFavoriteStock(value, callback) {
    Axios('stock/favorite', value, callback);
}

export {
    getStock,
    getFavoriteStock,
};