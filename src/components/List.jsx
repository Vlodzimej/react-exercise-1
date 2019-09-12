import React, { Component, Fragment } from 'react';
import '../assets/css/list.css';

class List extends Component {
    constructor(props) {
        super(props);
        const { items } = props;
        this.state = {
            items,
        };
    }

    componentWillReceiveProps(nextProps) {
        const { items } = nextProps;
        this.setState({ items });
    }

    render() {
        const { items } = this.state;

        const listContent = items.map((item, index) => {
            const itemClass = `list__item ${
                item.isCompleted ? 'completed' : ''
            }`;

            return (
                <li className={itemClass} key={index}>
                    {item.task}
                </li>
            );
        });

        return (
            <Fragment>
                <h1>List</h1>
                <ul className="list">{listContent}</ul>
            </Fragment>
        );
    }
}

export default List;
