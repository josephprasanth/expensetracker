import React from 'react';

const ExpenseList = ({ expenses,currency }) => {
    let sum = 0;
    

    return (  
        <div>{expenses.map((res) => {
            return <li>{res.amount}</li>
        })}</div>
    );
}
 
export default ExpenseList;