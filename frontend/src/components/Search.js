import React from 'react';

function SearchInput({search, keyword, stock}) {
    return (
        <div>
          <input type={"text"} className="search_input" size="25" onChange={keyword}/>
          <button onClick={search}>검색</button>
          <div>
          종목은 {stock}입니다.
          </div>
      </div>
    );
}

export default SearchInput;