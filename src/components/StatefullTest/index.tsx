import React, { Component } from 'react';


interface ComponentProps {
    initialCount?: number;
}

interface ComponentState {
    count: number;
}


export default class ComponentTest extends Component<ComponentProps, ComponentState>  {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            count: props.initialCount || 0,
        }
    }

    componentWillReceiveProps(nextProps: ComponentProps) {
        this.setState({
            count: nextProps.initialCount || 0,
        });
    }

    private increment = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }

    render() {
        const { count } = this.state;
        return <div>
            <p>Count is: {count}</p>
            <button onClick={this.increment}>
                increment
            </button>
        </div>;
    }
}
