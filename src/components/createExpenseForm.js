import React, { Component } from 'react';

const initialState = {
    error: [],
    expense: {
        amount: '',
        comment: ''
    }
}

class CreateExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onFieldChange = (e) => {
        let el = e.target;
        this.setState({
            expense: {
                ...this.state.expense, [el.id]: el.value
            }
        }, () => console.log(this.state)
        );
    }

    onSubmitClick = () => {
        // Doing Validation 
        let { amount } = this.state.expense;
        if (!amount || isNaN(amount)) {
            this.setState({
                error: ["Invalid Input"]
            })
        }
        this.props.onCreate(this.state.expense);
        this.setState(initialState);
    }


    render() {
        const { expense, error } = this.state;
        const { onCreate } = this.props;
        //console.log(expense["amount"]);

        return (
            <>
                <div className="cef">
                    <div className="cef--errors">
                        {error && error.map((e, index) => {
                            return <p key={index}>{e}</p>
                        })}
                    </div>
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