import './index.css';
import {useContext} from 'react';
import BalanceContext from './../../contexts/BalanceContext';

export default function Transactions(){

let {transactions} = useContext(BalanceContext);
const {setBalance} = useContext(BalanceContext);
let filteredTransactions = [];
console.log(transactions);
function sortByDate(a, b) {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
}

transactions.map((items, key) => {

    console.log("Tran" + filteredTransactions);

    if(filteredTransactions.includes(items.activity_id)) {
        transactions = transactions.splice(key, 1);
    }
    else{
        filteredTransactions.push(items.activity_id);
    }
})

console.log(transactions);
transactions.sort(sortByDate);
setBalance(transactions[0].balance);

function generateDescription(amount,type, source, destination){

    let description = "";
    amount > 0 ? description = `${type} From ${source.type}`: description = `${type} To ${destination.type} on ${destination.description}`

    return description;
}

    return(
        <div className="transactions">
            <table>
                <tr>
                    <th>Date</th>
                    <th>Transaction</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
                {transactions.map((transaction, key) =>{
                    return(
                        <tr key={key}> 
                            <td>{new Date(transaction.date).toDateString()}</td>
                            <td>{transaction.type}</td>
                            <td>{generateDescription(transaction.amount,transaction.type, transaction.source, transaction.destination)}</td>
                            <td>{transaction.amount > 0 ? <span style={{color:"green"}}>${transaction.amount}</span> : <span style={{color:"red"}}>${-1 * transaction.amount}</span>  }</td>
                            <td>{transaction.amount > 0 ? <span style={{color:"green"}}>${transaction.balance}</span> : <span style={{color:"red"}}>${transaction.balance}</span>  }</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}