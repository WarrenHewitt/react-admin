import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props)

        this.state={
            input: 'no'
        }
        this.handle1 = this.handle1.bind(this)
    }

    componentWillMount() {
        console.log('will mount', this.state)
    }

    componentDidMount() {
        let btn = this.refs.btn;
        let link = this.refs.link;
    }

    handle = () => {
        console.log('a', this)
    }
    handle1() {
        console.log('b', this.state)
    }

    render() {
        console.log('render');
        return (
            <div >

                <button ref='btn'>click</button>
                <a href='facebook.github.io/react' ref='link'>click</a>
         
                <img src={logo} className="App-logo" alt="logo" />

                <div style={{width:'200px',background:'red'}}>1111{ this.state.input }</div>

                <input type="text" ref={(input) => {this.a = input}}/>

                <button onClick={ this.handle }>按钮</button>
                <button onClick={ this.handle1 }>按钮1</button>
            </div>
        );
    }
}

export default App;
