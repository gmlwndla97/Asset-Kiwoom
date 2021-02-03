import React, { useState } from 'react';
import css from 'styled-components';

function MyPage() {
  const SideBar = css.div`
  width: 500px;
  border: 1px solid black;
  height: 100px;
  float: left;
  `

  const Filter = css.div`
  width: 1000px;
  border: 1px solid black;
  height: 100px;
  float: left;
  `


  const Box = css.div`
  width: 1000px;
  border: 1px solid black;
  height: 500px;
  margin-left:200px;
  float: left;
  `


  const UL = css.ul`
  list-style-type: none;
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
      <SideBar>
         <UL>
            <LI> <a href="#">선택1 </a></LI>
            <LI>  <a href="#">선택2 </a></LI>
            <LI> <a href="#"> 선택3 </a></LI>
          </UL>
      </SideBar>
      <Box>
        <Filter>
          필터
        </Filter>
        거래 내역 
      </Box>
      
    </div>
  );
}

export default MyPage;