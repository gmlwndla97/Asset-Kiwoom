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

const List = ({accounts}) => {
    const TD = css.td`
        list-style-type: none;
        padding: 3px;
        border-radius: 5px;
    `

    const accountList = accounts.map(
        (account, index) => (
            <TD><Item item={account}/></TD>
        )
    )

    return (
        <tr>{accountList}</tr>
    );
}

const AccountTable = ({accounts}) => {
    
    const Div = css.div`
        background-color: #F0F0F0;
        margin-top: 50px;
    `
    const accountList = accounts.map(
        (account, index) => (
            <List accounts={account}/>
        )
    )

    return (
        <Div>
            <table style={{margin: 'auto'}}> {accountList} </table>
        </Div>
    );
};

export default AccountTable;