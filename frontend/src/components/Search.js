import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import Modal from '../components/Modal';



function SearchInput({search, keyword, stock}) {
  const [modalVisible, setModalVisible] = useState(false)

  const Input = css.input.attrs({
    type: "text",
    size: "25"
  })`
    float: left;
  `;
  

  
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
                    <input
                      name="code"
                      type="text"
                      placeholder="종목코드"
                    />
                    <input
                      name="number"
                      type="text"
                      placeholder="수량"
                      />
                      <input
                      name="password"
                      type="password"
                      placeholder="비밀번호"
                        />
                      <button >
                      {" "} 매매{" "}
                      </button>
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