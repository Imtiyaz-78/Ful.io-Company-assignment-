
import React, { Component } from 'react';

import Counter from './component/Counter';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log("componentDidMount: when component is render first time")
    }


    Increment() {
        this.setState({ count: this.state.count + 1 });
    }

    componentWillUnmount(){
        console.log("componentWillUnmount: component Removed")
    }


    render() {
        return (
            <div>

    
                <Counter number={this.state.count}></Counter>
                <button onClick={() => { this.Increment() }}>Buttoun</button>
                <Counter />

            </div>
        )
    }
}

export default Test;