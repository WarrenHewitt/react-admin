import React from 'react'
import { Route, Switch } from 'react-router-dom';

/**
 * @des 页面组件 
 * */ 
import Welcome from '@/pages/welcome/welcome';
import ReactComponent from '@/pages/practice/react';
import PracticeIndex from '@/pages/practice/index';
import Hooks from '@/pages/practice/hooks/hooks';

import PageStore from '@/pages/pageStore/pageStore';
import Redux from '@/pages/redux/redux';

import SheetJs from '@/pages/third/sheetJs/sheetJs';
import Html2Canvas from '@/pages/third/html2Canvas/html2Canvas';
import JsPdf from '@/pages/third/jsPdf/jsPdf';

import Canvas from '@/pages/canvas/canvas';
import DrawBoard from '@/pages/canvas/drawBoard';


function SwitchCom () {
    return (<div className="page">
        <Switch>
            {/* 这里的path和路由中的path保持一致即可 */}
            <Route exact path='/'> <Welcome/> </Route>
            
            <Route path='/pageStore/index'> <PageStore/> </Route>
            
            <Route path='/practice/index'> <PracticeIndex/> </Route>
            <Route path='/practice/param/:id'> <ReactComponent/> </Route>
            <Route path='/practice/hooks'> <Hooks/> </Route>

            <Route path='/redux/redux'> <Redux/> </Route>

            <Route path='/third/sheet-js'> <SheetJs/> </Route>
            <Route path='/third/html2canvas'> <Html2Canvas/></Route>
            <Route path='/third/jsPdf'> <JsPdf/></Route>
            
            <Route path='/canvas/canvas'> <Canvas/> </Route>
            <Route path='/canvas/drawBoard'> <DrawBoard/> </Route>
        </Switch>
    </div>)
}

export default SwitchCom