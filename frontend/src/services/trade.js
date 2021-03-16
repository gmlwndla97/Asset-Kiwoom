import Axios2 from '../core/Axios2';

function buyStock(value, callback) {
    Axios2('trade/buy', value, null);
//    Axios('trade/buy', null, null);
}

export {
    buyStock,
};