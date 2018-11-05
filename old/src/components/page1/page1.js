import React from 'react'
import { connect } from 'react-redux'

import { page1 } from '../../actions/page1/page1.js';
import '../../public/css/page1.scss'

class Menu extends React.Component {

    componentDidMount(){

        const {dispatch}=this.props
        dispatch(page1([456]))

        console.log(this.props.match.params.id,'params');

    }

    render() {
        return <div className="page1">page1 jijissssij  {this.props.data}
            <p>artical  233333 </p>   
        </div>
    }
}

export default connect((state) => ({
    data: state.page1.data
}))(Menu)