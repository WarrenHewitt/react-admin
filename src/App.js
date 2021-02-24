import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style/index.scss';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import logo from './assets/logo.png';

import route from './route/route'

/**
 * @des 页面组件 
 * */ 
import Welcome from './pages/welcome/welcome';
import ReactComponent from './pages/practice/react';
import PracticeIndex from './pages/practice/index';
import Hooks from './pages/practice/hooks/hooks';

import SheetJs from './pages/third/sheetJs/sheetJs';
import Html2Canvas from './pages/third/html2Canvas/html2Canvas';
import JsPdf from './pages/third/jsPdf/jsPdf';

import Canvas from './pages/canvas/canvas';
import DrawBoard from './pages/canvas/drawBoard';

const { SubMenu } = Menu;

const Header = () => {
    return (<header className="app-header">
        <img src={ logo } className="app-logo" alt="logo" />
        <span className="h-title">REACT-ADMIN</span>
    </header>);
}

class App extends React.Component {
    state = {
        collapsed: false,
        menuList: route
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const menu = this.state.menuList.map(v => {
            return (<SubMenu
                key={v.id}
                title={
                    <span>
                        <TeamOutlined />
                        <span>{ v.name }</span>
                    </span>
                }
            >
                { v.children ? v.children.map(val => (<Menu.Item key={val.id}><Link to={ val.url }>{ val.name }</Link></Menu.Item>)) : '' }
            </SubMenu>)
        })

        return (
            <div className="App">
                <Router>
                    <Header></Header>
                    <section className="content">
                        <div className="menu">
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                { menu }
                            </Menu>
                        </div>
                        <div className="content-page">
                            <div className="page">
                                <Switch>
                                    <Route exact path='/'> <Welcome/> </Route>
                                    
                                    <Route path='/practice/index'> <PracticeIndex/> </Route>
                                    <Route path='/practice/param/:id'> <ReactComponent/> </Route>
                                    <Route path='/practice/hooks'> <Hooks/> </Route>

                                    <Route path='/third/sheet-js'> <SheetJs/> </Route>
                                    <Route path='/third/html2canvas'> <Html2Canvas/></Route>
                                    <Route path='/third/jsPdf'> <JsPdf/></Route>
                                    
                                    <Route path='/canvas/canvas'> <Canvas/> </Route>
                                    <Route path='/canvas/drawBoard'> <DrawBoard/> </Route>
                                </Switch>
                            </div>
                            <footer className="footer">copy-right</footer>
                        </div>
                    </section>
                </Router>
            </div>)
    }
}

export default App;
