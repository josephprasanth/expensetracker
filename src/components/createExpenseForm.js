import React, { Component } from 'react';

class CreateExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {
                amount: null,
                comment: null
            }
        }
    }
    render() {
        return (
            <>
                <div className="cef">
                    <div className="cef--field">
                        <label>Amount</label>
                        <input type="Number" />
                    </div>
                    <div className="cef--field">
                        <label>Comment</label>
                        <input type="text" />
                    </div>
                </div>
            </>

        );
    }
}

export default CreateExpenseForm;