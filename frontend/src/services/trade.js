import Axios from '../core/Axios';

function buyStock(value, callback) {
    Axios('trade/buy', value, null);
//    Axios('trade/buy', null, null);
}

export {
    buyStock,
};