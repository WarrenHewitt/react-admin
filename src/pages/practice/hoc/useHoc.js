import React, { Component } from 'react';

import hoc from './higherOrderComponent';
import hocExtend from './hocExtend';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';


const ComponentOneWithSub = hoc()(ComponentOne);
const ComponentTwoWithSub = hocExtend({ type: 'two', needRender: true })(ComponentTwo);

class UseHoc extends Component{
    render() {
        return (<div>
            <ComponentOneWithSub name="propName"></ComponentOneWithSub>
            <ComponentTwoWithSub></ComponentTwoWithSub>
        </div>)
    }
}

export default UseHoc;