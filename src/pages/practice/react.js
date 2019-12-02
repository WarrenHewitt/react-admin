import React, { Component } from 'react';
import { useParams } from 'react-router-dom';


/** 引入高阶组件 */
import UseHoc from './hoc/useHoc'
import { func } from 'prop-types';

const GetParams = () => {
    const { id } = useParams();
    return  <h3>router param id: { id }</h3>
}

class BeClone extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name: '123'
        }
    }

    render() {
        return  <div>be clone h3</div>
    }
}

class ReactComponent extends Component{
    render() {
        const Re = React.createElement('div', null, '标签');
        // console.log(Re);
        const NewEle = React.cloneElement(Re, { name: '233333name' })
        // <h3>使用初始props：{ this.props.name }</h3>
        // <GetParams></GetParams>
        // <div style={{ border: '1px solid #fff',margin: '10px',padding:'10px'}}></div>
        return (<div>
            {Re}  { NewEle }
        </div>);
    }
}  

ReactComponent.defaultProps = {
    name: 'hew-prop'
};

export default ReactComponent;
