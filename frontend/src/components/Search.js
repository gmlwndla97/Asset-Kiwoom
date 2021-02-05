import React from 'react';
import css from 'styled-components';

const Input = css.input.attrs({
  type: "text",
  size: "25"
})`
  float: left;
`;

function SearchInput({search, keyword, stock}) {
  
  return (
    <div>
      <Input onChange={keyword}/>
      <button onClick={search}>검색</button>
      <div>
        {stock}
      </div>
    </div>
  );
}

export default SearchInput;