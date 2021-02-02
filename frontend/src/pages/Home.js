import React, { useState, useEffect } from 'react';
import login from '../services/login';
import getStock from '../services/stock';
import SearchInput from '../components/Search';
import Favorite from '../components/Favorite';

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
  }

  function favoriteCallback(data) {
    const d = ["즐찾1","즐찾2"];
    setFavorites(d);
  }

  const getWord = (e)=> {
    setCode(e.target.value)
  }

  function search() {
    const param = new URLSearchParams();
    param.append('code', code);
    getStock(param,  stockCallback);
  }

  useEffect(
    () => {
        login(userCallback);
    }, []
  );

  return (
    <div>
      <header>
        사용자는 {user}입니다.
      </header>
      <SearchInput 
        search={search} 
        keyword={getWord}
        stock={stock}
      />
      <Favorite
        favorites={favorites}/>
    </div>
  );
}

export default Home;