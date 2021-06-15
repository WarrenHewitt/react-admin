import React, { Component } from 'react';
import { Input } from 'antd';
// import PropTypes from 'prop-types';
// @ts-ignore

import styles from './index.module.scss'

import logo from '@/assets/logo.png';

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
            <hr/>
            <h3 className={ styles.tit }> filter 实现高亮效果 </h3>
            <img src={ logo } alt="filter" style={ { height: '100px' } }  className={ styles.imgFilter }/>
            <hr/>
        </div>);
    }
}
export default Practice;