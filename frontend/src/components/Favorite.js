import React from 'react';
import css from 'styled-components';

const FavoriteItem = ({item}) => {
    const P = css.p`
        font-size: 1.2rem;
        color: #868e96;
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

const FavoriteList = ({favorites}) => {
    const UL = css.ul`
        list-style-type: none;
        background-color: #F0F0F0;
        padding: 1rem;
        width: 300px;
        border-radius: 5px;
    `

    const favoriteList = favorites.map(
        (favorite, index) => (
            <FavoriteItem item={favorite}/>
        )
    )

    return (
        <UL> {favoriteList} </UL>
    );
}

const Favorite = ({favorites}) => {
    
    const Div = css.div`
        float:right
    `

    return (
        <Div>
            즐겨찾기 목록
            <FavoriteList favorites={favorites}/>
        </Div>
    );
};

export default Favorite;