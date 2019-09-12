import React, { Component } from 'react';
import Counter from './Counter.jsx';
import List from './List.jsx';

class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            list: [
                { task: 'Todo something 1', isCompleted: false },
                { task: 'Todo something 2', isCompleted: true },
                { task: 'Todo something 3', isCompleted: false },
            ],
        };
    }

    increaseCounter = () => {
        const { counter } = this.state;
        this.setCounter(counter + 1);
    };

    decreaseCounter = () => {
        const { counter } = this.state;
        this.setCounter(counter - 1);
    };

    resetCounter = () => {
        this.setCounter(0);
    };

    setCounter = counter => {
        this.setState({ counter });
    };

    render() {
        const { counter, list } = this.state;
        return (
            <div>
                <Counter
                    value={counter}
                    increase={this.increaseCounter}
                    decrease={this.decreaseCounter}
                    reset={this.resetCounter}
                ></Counter>
                <List items={list}></List>
            </div>
        );
    }
}

export default App;
