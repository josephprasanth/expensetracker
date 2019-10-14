import React, { Component } from 'react';
import CreateExpenseForm from './createExpenseForm';
import Navbar from './navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses : [],
        }
    }
    
    createExpense = (expense) => {
        let { expenses } = this.state;
        expenses.push(expense);
        this.setState({ expenses })
    }

    render() { 
        return ( 
            <div>
            <Navbar />
            <CreateExpenseForm 
            onCreate={this.createExpense}
            />
            </div> );
    }
}
 
export default App;