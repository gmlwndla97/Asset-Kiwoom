import React, { useState } from 'react';
import css from 'styled-components';

function MyPage() {
  const SelectionBar = css.div`
  width: 500px;
  border-radius: 5px;
  height: 100px;
  padding-left:20px;
  float: left;
  `

  const Box = css.div`
  width: 500px;
  margin-top:20px;
  padding-left:20px;
  height: 500px;
  float: left;
  `

  const Filter = css.div`
  background-color: #F0F0F0;
  padding: 1rem;
  border-radius: 5px;
  width: 500px;
  height: 50px;
  float: left;
  `



  const History=css.div`
  background-color: #F0F0F0;
  padding: 1rem;
  border-radius: 5px;
  margin-top:30px;
  width: 500px;
  height: 300px;
  float: left;
  `


  const UL = css.ul`
  list-style-type: none;
  background-color: #F0F0F0;
  padding: 1rem;
  border-radius: 5px;
  `

  const LI = css.li`
  display: inline-block;
  padding : 1rem;
  text-align:center;
  font-size:1.2em;
  &:hover {
    color: red;
  }
  `

  return (
    <div>
      <SelectionBar>
         <UL>
            <LI> <a href="#">선택1 </a></LI>
            <LI>  <a href="#">선택2 </a></LI>
            <LI> <a href="#"> 선택3 </a></LI>
          </UL>
      </SelectionBar>
      <Box>
        <Filter>
          필터
        </Filter>
        <History>
          <UL>
            <li> 거래 내역 1 </li>
            <li> 거래 내역 2 </li>
            <li> 거래 내역 3</li>
          </UL>
        </History>
     
      </Box>
      
    </div>
  );
}

export default MyPage;