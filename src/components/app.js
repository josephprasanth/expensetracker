import React, { Component } from 'react';
import CreateExpenseForm from './createExpenseForm';
import Navbar from './navbar';
import ExpenseList from './expenseList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "$",
            expenses: [],
        }
    }

    createExpense = (expense) => {
        let { expenses } = this.state;
        expenses.push(expense);
        this.setState({ expenses })
    }

    render() {
        const { expenses,currency } = this.state;
        return (
            <>
                <Navbar />
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-5">
                            <CreateExpenseForm
                                onCreate={this.createExpense}
                            />
                        </div>
                        <div className="col-md-7">
                            <ExpenseList 
                            currency={currency}
                            expenses={expenses}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;