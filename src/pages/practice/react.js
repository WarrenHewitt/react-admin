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
    render() {
        return  <h3>be clone h3 {this.props.name}</h3>
    }
}

function ac() {
    return '<div>diivvi</div>'
}

class ReactComponent extends Component{
    render() {
        // const NewEle = React.cloneElement(ac(), { name: '233333name' })
        return (<div>
            <h3>使用初始props：{ this.props.name }</h3>
            <GetParams></GetParams>
            <div style={{ border: '1px solid #fff',margin: '10px',padding:'10px'}}>
                <UseHoc/>
            </div>
            {/* <NewEle/> */}
        </div>)
    }
}  

ReactComponent.defaultProps = {
    name: 'hew-prop'
};

export default ReactComponent;
