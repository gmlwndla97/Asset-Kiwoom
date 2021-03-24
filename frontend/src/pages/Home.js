import React, { useState, useEffect } from 'react';
import login from '../services/login';
import { getStock, getFavoriteStock, getRealStock } from '../services/stock';
import SearchInput from '../components/Search';
import FavoriteList from '../components/Favorite';
import StockTable from '../components/StockTable';
import StockChart from '../components/StockChart';

function Home() {
  const [user, setUser] = useState('');
  const [stock, setStock] = useState('');
  const [code, setCode] = useState('');
  const [chartData, setChartData] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [realStocks, setRealStocks] = useState([]);
  const [socket, setSocket] = useState();

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

  function realStockCallback(data) {
    console.log(data['message']);
    setRealStocks(data['message']);
    setChartData(data['message'][0][1]);
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

  function connectRealStock() {
    setSocket(getRealStock(realStockCallback));
  }

  function disconnectRealStock() {
    // socket.send()
    socket.send(JSON.stringify({
      'message': "소켓 해제"
    }));
    socket.close();
  }

  useEffect(
    () => {
        login(userCallback);
    }, []
  );

  return (
    <div>
      <table style={{width: '75vw', float: 'left', 'borderSpacing': '20px'}}>
        <tr>
          <td>
            <SearchInput
              search={search}
              keyword={getWord}
              stock={stock}
              buy={stock}/>
            사용자는 {user}입니다.
            <button onClick={connectRealStock}>시작</button>
            <button onClick={disconnectRealStock}>중지</button>
            <StockTable
              stocks={realStocks}/>
          </td>
          <td>
            <FavoriteList
              favorites={favorites}/>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <StockChart
              data={chartData} />
          </td>
        </tr>
      </table>
      
      
    </div>
  );
}

export default Home;