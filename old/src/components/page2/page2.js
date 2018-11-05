import React  from 'react';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router-dom'
import { page1 } from '../../actions/page1/page1.js';

class Other extends React.Component{
    componentDidMount(){
         const {dispatch}=this.props
        dispatch(page1([559595]))
    }
    render(){
        const { match, location, history } = this.props
        
        return <div>Other
             <div>You are now at {location.pathname}</div>
        </div>
    }
}



  //const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

export default withRouter(connect(state=>({
    data:state.page1.data
}))(Other))