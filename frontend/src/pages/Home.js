import React, { useState, useEffect } from 'react';
import login from '../services/login';
import { getStock, getFavoriteStock } from '../services/stock';
import SearchInput from '../components/Search';
import FavoriteList from '../components/Favorite';
import StockTable from '../components/StockTable';

function Home() {
  const [user, setUser] = useState('');
  const [stock, setStock] = useState('');
  const [code, setCode] = useState('');
  const [favorites, setFavorites] = useState([]);

  function stockCallback(data) {
    setStock(JSON.stringify(data));
  }

  function userCallback(data) {
    setUser(data);
    initFavoriteStock();
  }

  function favoriteCallback(data) {
    setFavorites(data);
  }

  const getWord = (e)=> {
    setCode(e.target.value)
  }

  function search() {
    const param = new URLSearchParams();
    param.append('code', code);
    getStock(param,  stockCallback);
  }

  function initFavoriteStock() {
    getFavoriteStock(null, favoriteCallback);
  }

  useEffect(
    () => {
        login(userCallback);
    }, []
  );

  return (
    <div>
      <table style={{width: '75vw', float: 'left', 'border-spacing': '20px'}}>
        <tr>
          <td>
            <SearchInput 
              search={search} 
              keyword={getWord}
              stock={stock} />
            사용자는 {user}입니다.
            <StockTable
              stocks={favorites}/>
          </td>
          <td>
            <FavoriteList
              favorites={favorites}/>
          </td>
        </tr>
        <tr>
          <td colSpan="2">차트</td>
        </tr>
      </table>
      
      
    </div>
  );
}

export default Home;