import React from 'react';
import css from 'styled-components';

function SearchInput({search, keyword, stock}) {
  const Input = css.input`
    size: "25",
    type: "text",
    float: left;
    `

  return (
      <div>
        <Input className="search_input" onChange={keyword}/>
        <button onClick={search}>검색</button>
        <div>
          {stock}
        </div>
    </div>
  );
}

export default SearchInput;