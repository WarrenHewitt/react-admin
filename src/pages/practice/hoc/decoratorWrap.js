/* eslint-disable */
import React, { Component } from 'react';

export default InputComponent => (
    class DecoWrapper extends Component{
        render() {
            return (<div>
                <div>这是 decorator 高阶组件</div>
                <InputComponent/>
            </div>)
        }
    }    
)