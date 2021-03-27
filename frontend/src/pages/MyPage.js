import React, { useState, useEffect, Component } from 'react';
import css from 'styled-components';
import styled from 'styled-components';
import { getRealAccount } from '../services/history';
import AccountTable from '../components/AccountTable';

function MyPage() {
  const [realAccount, setRealAccount] = useState([]);

  function callback(data) {

    var valueList = [];
    var templist=[];
    templist.push("종목번호");
    templist.push("종목명");
    templist.push("평가손익");
    templist.push("수익률(%)");
    templist.push("매입가");
    templist.push("보유수량");
    templist.push("매매가능수량");
    templist.push("현재가");
    valueList.push(templist)

    data = JSON.parse(data);
    Object.keys(data).forEach(function(k){
      var list = [];
       for(var key in data[k]) {
      
         list.push(data[k][key])
       }
       valueList.push(list);
    });
    console.log(valueList)

    setRealAccount(valueList);
  }
  

  function getAccountList() {
    getRealAccount(callback);
  }

  useEffect(
    () => {
        getAccountList();
    }, []
  );


  function showUnSigned(){
    document.getElementById('notSignedArea').style.display = "block"; // 보여줌
    document.getElementById('balanceArea').style.display = "none"; // 안보여줌

  }

  function showAccounts(){
    document.getElementById("balanceArea").style.display = 'block'; // 
    document.getElementById("notSignedArea").style.display = 'none'; // 
    
  }

  const SelectionBar=css.div`
  border-radius: 5px;
  float:left;
  padding-top:40px;
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
  padding: 1rem;
  border-radius: 5px;
  margin-top:30px;
  width: 100%;
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
    <div style={{width: '100%', float: 'left', 'border-spacing': '20px'}}>
      <SelectionBar>
        <ButtonLI><input type="radio" value="notSigned" id="notSigned" name="selection"/> 
        <label for="notSigned"  onClick={showUnSigned}> 미체결 </label></ButtonLI>

        <ButtonLI><input type="radio" value="balance" id="balance" name="selection" />
        <label for="balance" onClick={showAccounts} >잔고</label> </ButtonLI>

        <ButtonLI><input type="radio" value="deposit"id="deposit" name="selection" />
        <label for="deposit">예수금</label> </ButtonLI>

        <ButtonLI><input type="radio" value="todayTrading" id="todayTrading" name="selection" /> 
        <label for="todayTrading">당일매매</label></ButtonLI>
        
        <ButtonLI><input type="radio" value="confirm" id="confirm" name="selection" />
        <label for="confirm">체결확인</label> </ButtonLI>
      </SelectionBar>
       
        
      
      <Box>
         <history>
            <div id="notSignedArea">
            
            </div>
            <div id="balanceArea">
              <AccountTable accounts={realAccount} />
            </div>
          </history>  
     
      </Box>


    </div>
  );
}

export default MyPage;