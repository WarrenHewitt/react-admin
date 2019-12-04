import React, { Component } from 'react';

class BeClone extends Component{
    constructor(prop) {
        super(prop);
        this.state = {
            name: '123'
        }
    }

    render() {
        return  <h3>这是 class 组件</h3>
    }
}

export default BeClone;