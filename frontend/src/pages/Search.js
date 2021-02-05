import React, { useState } from 'react';
import { getStock } from '../services/stock';
import SearchInput from '../components/Search';

function Search() {
  const [stock, setStock] = useState('');
  const [code, setCode] = useState('');

  function callback(data) {
    setStock(JSON.stringify(data));
  }

  const getWord = (e)=> {
    setCode(e.target.value)
  }

  function search() {
    const param = new URLSearchParams();
    param.append('code', code);
    getStock(param,  callback);
  }

  return (
    <SearchInput 
      search={search} 
      keyword={getWord}
      stock={stock}
    />
  );
}

export default Search;