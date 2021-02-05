import React from 'react';
import css from 'styled-components';

const Item = ({item}) => {
    const P = css.p`
        font-size: 1.2rem;
    `
    const B = css.b`
        color: #212529;
    `
    return (
        <li>
            <P> <B>{item}</B> </P>
        </li>
    );
}

const List = ({favorites}) => {
    const UL = css.ul`
        list-style-type: none;
        background-color: #F0F0F0;
        padding: 1rem;
        border-radius: 5px;
    `

    const favoriteList = favorites.map(
        (favorite, index) => (
            <Item item={favorite}/>
        )
    )

    return (
        <UL> {favoriteList} </UL>
    );
}

const FavoriteList = ({favorites}) => {
    
    const Div = css.div`
       
    `

    return (
        <Div>
            즐겨찾기 목록
            <List favorites={favorites}/>
        </Div>
    );
};

export default FavoriteList;