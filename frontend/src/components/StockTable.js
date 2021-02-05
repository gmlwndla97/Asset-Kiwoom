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

const List = ({stocks}) => {
    const TD = css.td`
        list-style-type: none;
        padding: 1rem;
        border-radius: 5px;
    `

    const stockList = stocks.map(
        (stock, index) => (
            <Item item={stock}/>
        )
    )

    return (
        <TD> {stockList} </TD>
    );
}

const StockTable = ({stocks}) => {
    
    const Div = css.div`
        background-color: #F0F0F0;
        margin-top: 10px;
    `

    return (
        <Div>
            시세
            <table>
            <tr>
                <List stocks={stocks}/>
            </tr>
            </table>
        </Div>
    );
};

export default StockTable;