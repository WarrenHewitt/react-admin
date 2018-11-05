import React from 'react'
import { connect } from 'react-redux'



import '../public/css/home.scss'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../components/home/home.js'

import Menu from '../components/home/menu.js'
import Other from '../components/page2/page2.js'

import Login from '../components/login/login.js'

const NoMatch = () => (
    <div>no match</div>
)



class Routes extends React.Component {
    
    render() {
        const { user } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/admin' component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default connect(state => ({
    user: state.user
}))(Routes)