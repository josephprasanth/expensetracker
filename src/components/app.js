import React, { Component } from 'react';
import CreateExpenseForm from './createExpenseForm';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <CreateExpenseForm />
            </div> );
    }
}
 
export default App;