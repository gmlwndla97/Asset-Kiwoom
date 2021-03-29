import React, { useState, useEffect, Component } from 'react';
import css from 'styled-components';
import styled from 'styled-components';
import { getRealAccount,getStockInfo, getNotSignedStock } from '../services/history';
import AccountTable from '../components/AccountTable';

function MyPage() {
  const [realAccount, setRealAccount] = useState([]);
  const [unsignedStock, setunsignedAccount] = useState([]);
  const [stockInfo, setStockInfo]= useState([]);
  const [option, setOption]=useState('');

  function unsignedStockCallback(data){
    var valueList = [];
    var templist=[];
    templist.push("주문번호");
    templist.push("종목코드");
    templist.push("주문상태");
    templist.push("종목명");
    templist.push("주문수량");
    templist.push("주문가격");
    templist.push("미체결수량");
    templist.push("주문구분");
    templist.push("매매구분");
    templist.push("시간");
    templist.push("체결가");
    templist.push("체결량");
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
    setunsignedAccount(valueList);
  }

  function acccountCallback(data) {

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
  
  function stockInfoCallback(data){
    if(option=="notSigned"){
      var valueList = [];
      var templist=[];
      templist.push("주문번호");
      templist.push("종목코드");
      templist.push("주문상태");
      templist.push("종목명");
      templist.push("주문수량");
      templist.push("주문가격");
      templist.push("미체결수량");
      templist.push("주문구분");
      templist.push("매매구분");
      templist.push("시간");
      templist.push("체결가");
      templist.push("체결량");
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
      setStockInfo(valueList);
    }
    else if(option=="balance"){
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
  
      setStockInfo(valueList);
    }
  }
  const handleChange = (e) => {
    // param is the argument you passed to the function
    // e is the event object that returned
   // console.log("target. value",e.target.value);
    setOption(e.target.value);
    console.log("option", option);
  };

  function clickCheck(){
    var opoption = document.getElementsByName('selection');
    var option_value;
    for(var i = 0; i < opoption.length; i++){
        if(opoption[i].checked){
            option_value = opoption[i].value;
        }
    }
  }
  function getAccountInfo() {
    //getRealAccount(acccountCallback); //일단 접속하면 계좌 정보 가져옴
    getNotSignedStock(unsignedStockCallback);
    //initRealAccount();
    //initUnsignedStock();
    //getStockInfo(stockInfoCallback);
  }

  // function initRealAccount(){
  //   getRealAccount(acccountCallback);
  // }

  // function initUnsignedStock(){
  //   getNotSignedStock(unsignedStockCallback);
  // }

  useEffect(
    () => {
        //getAccountList();
        getAccountInfo();
    }, []
  );


  function showUnSigned(){
    getNotSignedStock(unsignedStockCallback);
    document.getElementById('notSignedArea').style.display = "block"; // 보여줌
    document.getElementById('balanceArea').style.display = "none"; // 안보여줌

  }

  function showAccounts(){
    getRealAccount(acccountCallback);
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



 const History=css.div`
  padding: 1rem;
  border-radius: 5px;
  margin-top:30px;
  width: 100%;
  height: 300px;
  float: left;
  `

 
  function displayRadioValue() {
    var ele = document.getElementsByName('selection');
      
    for(var i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          setOption(ele[i].value);
        }
    }
    setStockInfo();
  }
  return (
    <div style={{width: '100%', float: 'left', 'border-spacing': '20px'}}>
      <SelectionBar>
        <ButtonLI><label><input type="radio" value="notSigned" id="notSigned" name="selection"
        onClick={showUnSigned}/> 미체결 </label></ButtonLI>

        <ButtonLI><input type="radio" value="balance" id="balance" name="selection" />
        <label for="balance" onClick={showAccounts} >잔고</label> </ButtonLI>

        <button type="button" onClick={displayRadioValue}>
        Submit
        </button>
      </SelectionBar>
       
      <Box>
         <history>
            <div id="notSignedArea">
              <AccountTable accounts={unsignedStock} /> 
            </div>
            <div id="balanceArea">
              {<AccountTable accounts={realAccount} /> }
              {/* {<AccountTable accounts={stockInfo} /> } */}
            </div>

            
          </history>  
     
      </Box>


    </div>
  );
}

export default MyPage;