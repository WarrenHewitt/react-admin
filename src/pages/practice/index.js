import React, { Component } from 'react';
import { Input } from 'antd';
// import PropTypes from 'prop-types';
// @ts-ignore
class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'input value'
        }
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (<div>
            <Input value={this.state.inputValue} onChange={this.onChange} />
            <p>{ this.state.inputValue }</p>
        </div>);
    }
}
export default Practice;