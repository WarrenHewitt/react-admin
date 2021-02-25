import React from 'react';
// import { Button } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style/index.scss';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import logo from './public/logo.png';

/**
 * @des 页面组件 
 * */ 
import Welcome from './pages/welcome/welcome';
import ReactComponent from './pages/practice/react';
import PracticeIndex from './pages/practice/index';

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

/**
 * 参考
 * https://github.com/marmelab/react-admin
 * https://github.com/yezihaohao/react-admin
 */

class App extends React.Component {
    state = {
        collapsed: false,
        menuList: [{
            id: '1',
            icon: 'desktop',
            name: 'practice',
            children: [{
                id: '1-1',
                name: 'index',
                url: '/practice/index',
            }, {
                id: '1-2',
                name: 'react',
                url: '/practice/param/react',
            }]
        }, {
            id: '2',
            name: '第三方库示例',
            icon: 'desktop',
            children: [
                { id: '2-1', name: 'sheetJs', url: '/third/sheet-js' },
                { id: '2-2', name: 'html2canvas', url: '/third/html2canvas' },
                { id: '2-3', name: 'jsPdf', url: '/third/jsPdf' },
            ]
        }, {
            id: '3',
            name: 'canvas',
            icon: 'desktop',
            children: [
                { id: '3-1', name: 'canvas-移动', url: '/canvas/canvas' },
                { id: '3-2', name: 'canvas-画布', url: '/canvas/drawBoard' }
            ]
        }]
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
