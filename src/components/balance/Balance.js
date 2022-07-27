import './index.css';
import {useContext, useState} from 'react';
import BalanceContext from './../../contexts/BalanceContext';

export default function Balance(){
    const {balance} = useContext(BalanceContext);

    return(
     <div className="balance_container">
        <h2>Balance : ${balance}</h2>
     </div>
    )
}