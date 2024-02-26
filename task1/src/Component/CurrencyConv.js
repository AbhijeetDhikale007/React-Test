/*
import React, { Component} from "react";

class CurrencyConv extends Component {
    render() {
        const Value = document.getElementsByClassName("InputCurrency");

        const DollerValue = Value / 0.012;

       const ValueOutput = () =>
        {
            const DollerValue = Value / 0.012;
            return (
            <h3>{Value} = {DollerValue}</h3>
            )
    }

    return(
            <div>
                <h3>Input Value In Rupee: </h3>
                <input type="number" className="InputCurrency" /><br/>
                <input value={DollerValue}/>
            </div>
        )
    }
}

export default CurrencyConv;
*/

import React, { Component } from "react";

class CurrencyConv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inr: 0,
            usd: 0,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        },
            this.convertCurrency);
    };

    convertCurrency = () => {
        const { inr } = this.state;

        // Replace With Current
        const exchangeRate = 0.012;

        const usd = inr * exchangeRate;
        this.setState({
            usd,
        });
    };

    render() {
        const { inr, usd } = this.state;

        return (
            <div>
                <label>
                    INR:
                    <input
                    className="InputCurrency"
                        type="number"
                        name="inr"
                        value={inr}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    USD:
                    <input
                    className="InputCurrency"
                        type="number"
                        name="usd"
                        value={usd}
                        readOnly
                    />
                </label>
            </div>
        );
    }
}

export default CurrencyConv;