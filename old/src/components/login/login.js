import React  from 'react'
import { connect }  from 'react-redux'
import { user } from '../../actions/page1/page1.js'

class Login extends React.Component{
    onclick=()=>{
        console.log('click at')
        this.props.dispatch(user());
    }
    render(){    
        return <div>
            <button onClick={this.onclick}>
                更改store
            </button>  
        </div>
    }
}

export default connect(()=>({}))(Login)