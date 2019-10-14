import React, { Component } from 'react';

class CreateExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [],
            expense: {
                amount: '',
                comment: ''
            }
        }
    }
    
    onFieldChange = (e) => {
          let el = e.target;
          this.setState({
              expense: {
                ...this.state.expense, [el.id] : el.value
              }
          }, () => console.log(this.state)
          );
    }

    onSubmitClick = () => {
       // Doing Validation 
       let { amount,comment } = this.state.expense;
       if (!amount || !comment) {
           this.setState({ 
               error: ["Invalid Input"]
           })
           console.log(this.state.error);
           
       }
       
    }


    render() {
        const {expense} = this.state;
        const { onCreate } = this.props;
        return (
            <>
                <div className="cef">
                    <div className="cef--field">
                        <label>Amount</label>
                        <input 
                        id="amount" 
                        type="Number"
                        placeholder="eg 300"
                        onChange={this.onFieldChange}
                        value={expense["amount"]}  
                        />
                    </div>
                    <div className="cef--field">
                        <label>Comment</label>
                        <input 
                        id="comment"                       
                        type="text"
                        placeholder="eg Restaurant" 
                        onChange={this.onFieldChange}
                        value={expense["comment"]} 
                        />
                    </div>
                    <button onClick={this.onSubmitClick}>Submit</button>
                </div>
               
            </>

        );
    }
}

export default CreateExpenseForm;