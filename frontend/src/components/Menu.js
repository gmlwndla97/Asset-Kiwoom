import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'styled-components';

const Menu = () => {
    
    const SideBar = css.div`
        float: left;
        height: 100vh;
        width: 25vw;
        background-color: #F0F0F0;
    `
    const UL = css.ul`
        list-style-type: none;
        padding: 0px;
        text-align: center;
        font-size: 1.5rem;
    `

    const LI = css.li`
        padding: 50px;
    `

    const activeClassName = "nav"
    const StyledLink = css(NavLink).attrs({ activeClassName })`
        text-decoration:none;
        color: green;
        &.${activeClassName} {
            color: blue;
        }
    `


    return (
        <SideBar>
            <UL>
                <LI><StyledLink exact to="/">홈</StyledLink></LI>
                <LI><StyledLink exact to="/mypage">내 정보</StyledLink></LI>
                <LI><StyledLink to="/search">박보검색</StyledLink></LI>
            </UL>
        </SideBar>
    );
};

export default Menu;