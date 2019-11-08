import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../welcome/welcome';
import Page1 from '../page1/page1';
import PracticeIndex from '../practice/index';

export const Home = props => {
    return (<div>
        <Switch>
            <Route exact path='/'> <Welcome/> </Route>
            <Route path='/page1/:id'> <Page1/> </Route>
            <Route path='/practice/index'> <PracticeIndex/> </Route>
        </Switch>
    </div>)
};