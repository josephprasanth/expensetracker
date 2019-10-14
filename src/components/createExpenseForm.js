import React, { Component } from 'react';

const initialState = {
    errors: [],
    expense: {
        amount: "",
        comment: "",
    }
};

class CreateExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onFieldChange = e => {
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
            let error = "Invalid Input";
            this.setState({
                errors: [error]
            })
        }
        this.props.onCreate(this.state.expense);
        this.setState(initialState);
    }


    render() {
        const { expense, error } = this.state;
        return (
            <>
                <fieldset>
                    <legend>Create Expense</legend>

                    {error && error.map((e, index) => {
                        return <p key={index}>{e}</p>
                    })}

                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="Number"
                            placeholder="eg 300"
                            className="form-control"
                            onChange={this.onFieldChange}
                            value={expense["amount"]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <input
                            id="comment"
                            type="text"
                            placeholder="eg Restaurant"
                            className="form-control"
                            onChange={this.onFieldChange}
                            value={expense["comment"]}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={this.onSubmitClick}
                        type="button"
                    >Create</button>
                </fieldset>
            </>
        );
    }
}

export default CreateExpenseForm;