import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'styled-components';

const Menu = () => {
    
    const SideBar = css.div`
    width: 200px;
    border: 1px solid black;
    float: left;
    `

    const activeStyle = {
    color: 'green',
    fontSize: '1rem'
    };

    return (
        <SideBar>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
                <li><NavLink exact to="/mypage" activeStyle={activeStyle}>내 정보</NavLink></li>
                <li><NavLink to="/search" activeStyle={activeStyle}>검색</NavLink></li>
            </ul>
        </SideBar>
    );
};

export default Menu;