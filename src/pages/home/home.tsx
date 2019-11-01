import React, { FC }  from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../welcome/welcome';
import Page1 from '../page1/page1';
import Page2 from '../page2/page2';

export interface HomeProps {
    name ?: string
}

export const Home: FC<HomeProps> = props => {
    return (<div>
        <Switch>
            <Route exact path='/' component={ Welcome } />
            <Route path='/page1' component={ Page1 } />
            <Route path='/page2' component={ Page2 } />
        </Switch>
    </div>)
};