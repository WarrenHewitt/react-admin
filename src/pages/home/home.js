import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../welcome/welcome';
import ReactComponent from '../practice/react';
import PracticeIndex from '../practice/index';

export const Home = props => {
    return (<div>
        <Switch>
            <Route exact path='/'> <Welcome/> </Route>
            <Route path='/practice/index'> <PracticeIndex/> </Route>
            <Route path='/practice/param/:id'> <ReactComponent/> </Route>
        </Switch>
    </div>)
};