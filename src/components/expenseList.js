import React from 'react';

const ExpenseList = ({ expenses,currency,onDelete }) => {
    let sum = 0;
    const expensesListEl = expenses.map((expense, index) => {
        sum += expense.amount * 1;
        return (
            <div key={index} className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{expense.comment}</h5>
                    <strong>
                        {expense.amount}
                        {currency}
                    </strong>
                </div>
                <button 
                className="btn btn-danger btn-sm btn-rm"
                onClick={() => {onDelete(index)}}
                >
                Remove                
                </button>
            </div>
        );
    });

    return (
        <> 
        { expenses.length > 0 ? (
            <>
            <h4>Sum: {sum}</h4>
            <div className="list-group mt-3">
            {expensesListEl}
            </div>
            </>
            ) : (
                <span>No data yet</span>    
            )}        
        </>
    );
};

export default ExpenseList;