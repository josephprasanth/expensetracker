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
        });
    }

    onSubmitClick = () => {
        let { expense, expense: { amount }, errors } = this.state;
        if (!amount || isNaN(amount)) {
            let error = "Invalid Input";
            //If this error is already there , then dont add it
            if (errors.indexOf(error) < 0) {
                this.setState({
                    errors: [...errors, error]
                });
            }
            return;
        }
        this.props.onCreate(expense);
        this.setState(initialState);
    };

    render() {
        const { expense, errors } = this.state;
        return (
            <>
                <fieldset>
                    <legend>Create Expense</legend>

                    {errors && errors.map((e, index) => {
                        return (
                            <div className="alert alert-warning" key={index}>
                                {e}
                            </div>)
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