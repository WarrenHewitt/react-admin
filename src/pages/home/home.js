import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../welcome/welcome';
import ReactComponent from '../practice/react';
import PracticeIndex from '../practice/index';

import SheetJs from '../third/sheetJs/sheetJs';
import Canvas from '../canvas/canvas';
import DrawBoard from '../canvas/drawBoard';

export const Home = props => {
    return (<div>
        <Switch>
            <Route exact path='/'> <Welcome/> </Route>
            <Route path='/practice/index'> <PracticeIndex/> </Route>
            <Route path='/practice/param/:id'> <ReactComponent/> </Route>
            <Route path='/third/sheet-js'> <SheetJs/> </Route>
            <Route path='/canvas/canvas'> <Canvas/> </Route>
            <Route path='/canvas/drawBoard'> <DrawBoard/> </Route>
        </Switch>
    </div>)
};