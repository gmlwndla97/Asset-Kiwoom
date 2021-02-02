import Axios from '../core/Axios';

export default function getStock(value, callback) {
    Axios('stock', value, callback);
}