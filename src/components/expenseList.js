import React from 'react';

const ExpenseList = ({ expenses,currency }) => {
    let sum = 0;
    const expensesListEl = expenses.map((expensez, index) => {
        sum += expensez.amount *1;
        return (
            <div key={index} className="list-group-item">
            <div className="d-flex">
            <h5>{expensez.comment}</h5>
            <strong>
            { expensez.amount }
            { currency }
            </strong>
            </div>            
            </div>
        )
    })

    return ( <div>{ expensesListEl }</div> )
    //     return (  
    //     <div>{expenses.map((res) => {
    //         return (
    //             <div>
    //             <li>{res.amount}</li>
    //             <li>{res.comment}</li>
    //             </div>
    //         )
                
            
    //     })}</div>
    // );
}
 
export default ExpenseList;