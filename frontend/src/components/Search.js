import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import Modal from '../components/Modal';
import {buyStock} from '../services/trade';



function SearchInput({search, keyword, stock}) {
  const [modalVisible, setModalVisible] = useState(false)
  const [code, setCode] = useState('')
  const [number, setNumber] = useState('')
  const [money, setMoney] = useState('')

  const Input = css.input.attrs({
    type: "text",
    size: "25"
  })`
    float: left;
  `;

//  useEffect(
//    () => {
//        buyStock(null,null);
//    }, []
//  );

  const getCord = (e)=> {
    setCode(e.target.value)
  }
  const getNumber = (e)=> {
    setNumber(e.target.value)
  }
  const getMoney = (e)=> {
    setMoney(e.target.value)
  }
    //팝업추가
    const openModal = () => {
      setModalVisible(true)
    }
    // const closeModal = () => {
    //   setModalVisible(false)
    // }
      
    const handleCloseModal= e=>{
      if(modalVisible) setModalVisible(false)
    }

    const handleSubmit= e=>{
        const param = new URLSearchParams();
        param.append('code', code);
        param.append('number', number);
        param.append('money', money);
        alert(param)
        buyStock(param,null);
    }

  
    useEffect(() =>{
      window.addEventListener('click', handleCloseModal);
      return ()=>{
        window.removeEventListener('click', handleCloseModal);
      };
    }, []);
 

    
  return (
    <div>
      <Input onChange={keyword}/>
      <button onClick={search}>검색</button>
      <>
                <button onClick={openModal}>매도 / 매수</button>
                {
                  modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={handleCloseModal}
                    >
                    <form onSubmit={handleSubmit}>
                    <input onChange = {getCord}
                      name="code"
                      type="text"
                      placeholder="종목번호"
                    />
                    <input onChange = {getNumber}
                      name="number"
                      type="text"
                      placeholder="수량"
                     />
                      <input onChange = {getMoney}
                      name="money"
                      type="text"
                      placeholder="가격"
                        />
                      <button type="submit">
                      {" "} 매매{" "}
                      </button>
                      </form>
                    </Modal>
                }
              </>

      <div>
        {stock}
      </div>
    </div>
  );
}

export default SearchInput;