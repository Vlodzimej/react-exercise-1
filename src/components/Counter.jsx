import React, { Component, Fragment } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        const { value } = this.props;
        this.state = { value };
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        this.setState({ value });
    }

    handleIncrease = () => {
        const { increase } = this.props;
        increase();
    };

    handleDecrease = () => {
        const { decrease } = this.props;
        decrease();
    };

    handleReset = () => {
        const { reset } = this.props;
        reset();
    };

    render() {
        const { value } = this.state;
        return (
            <Fragment>
                <h1>Counter</h1>
                <div>{value}</div>
                <button onClick={this.handleDecrease}>Decrease</button>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleReset}>Reset</button>
            </Fragment>
        );
    }
}

export default Counter;
