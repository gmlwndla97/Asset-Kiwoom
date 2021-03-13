import React from 'react';
import css from 'styled-components';

const Item = ({item}) => {
    const B = css.b`
        color: #212529;
    `
    return (
        <li>
            <B>{item}</B>
        </li>
    );
}

const List = ({stocks}) => {
    const TD = css.td`
        list-style-type: none;
        padding: 3px;
        border-radius: 5px;
    `

    const stockList = stocks.map(
        (stock, index) => (
            <TD><Item item={stock}/></TD>
        )
    )

    return (
        <tr>{stockList}</tr>
    );
}

const StockTable = ({stocks}) => {
    
    const Div = css.div`
        background-color: #F0F0F0;
        margin-top: 10px;
    `
    const stockList = stocks.map(
        (stock, index) => (
            <List stocks={stock}/>
        )
    )

    return (
        <Div>
            시세
            <table style={{margin: 'auto'}}> {stockList} </table>
        </Div>
    );
};

export default StockTable;