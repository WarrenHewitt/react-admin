import React, { Component } from 'react';

import hoc from './higherOrderComponent';
import hocExtend from './hocExtend';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';

const ComponentOneWithSub = hoc()(ComponentOne);
const ComponentTwoWithSub = hocExtend({ type: 'two', needRender: true })(ComponentTwo);

class UseHoc extends Component{
    render() {
        return (<div>
            <ComponentOneWithSub name="propName"></ComponentOneWithSub>
            <ComponentTwoWithSub></ComponentTwoWithSub>
            <h1 style={{ borderTop: '1px solid #fff', marginTop: '10px' }}>装饰器方式</h1>
            <ComponentThree></ComponentThree>
        </div>)
    }
}

export default UseHoc;