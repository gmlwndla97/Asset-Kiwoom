import React, { useState, useEffect, Component } from 'react';
import css from 'styled-components';
import styled from 'styled-components';
import { getAccount } from '../services/history';


function MyPage() {
  const [account, setAccount] = useState('');

  function callback(data) {
    setAccount(JSON.stringify(data));
  }

  function getAccountList() {
    getAccount(callback);
  }

  useEffect(
    () => {
        getAccountList();
    }, []
  );


  const SelectionBar=css.div`
  border-radius: 5px;
  float:left;
  padding-top:20px;
  padding-left:20px;
  `
  const ButtonLI = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background: #A9D0F5;
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  `

  const Box = css.div`
  width: 1000px;
  margin-top:20px;
  padding-left:20px;
  height: 500px;
  position: relative;
  align:center;
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
    <div style={{width: '75vw', float: 'left', 'border-spacing': '20px'}}>
      <SelectionBar>
        <ButtonLI><input type="radio" value="notSigned" id="notSigned" name="selection"/> 
        <label for="notSigned"> 미체결 </label></ButtonLI>

        <ButtonLI><input type="radio" value="balance" id="balance" name="selection" />
        <label for="balance">잔고</label> </ButtonLI>

        <ButtonLI><input type="radio" value="deposit" name="selection"id="selection" />
        <label for="selection">예수금</label> </ButtonLI>

        <ButtonLI><input type="radio" value="todayTrading" id="todayTrading" name="selection" /> 
        <label for="todayTrading">당일매매</label></ButtonLI>
        
        <ButtonLI><input type="radio" value="confirm" id="confirm" name="selection" />
        <label for="confirm">체결확인</label> </ButtonLI>
      </SelectionBar>
       
        
      
      <Box>
        <Filter>
          필터
        </Filter>
        <History>
         {/* <UL>
            <li> 거래 내역 1 </li>
            <li> 거래 내역 2 </li>
            <li> 거래 내역 3</li>
          </UL> */}
          {account}
        </History>
     
      </Box>


    </div>
  );
}

export default MyPage;