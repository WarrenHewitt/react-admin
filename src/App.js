import React from 'react';
// import { Button } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/index.scss';
import { Link } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Menu, Icon } from 'antd';

import logo from './public/logo.png';

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
                {
                    id: '2-1',
                    name: 'sheetJs',
                    url: '/third/sheet-js'
                }
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
                        <Icon type={ v.icon } />
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
                                <Home></Home>
                            </div>
                            <footer className="footer">copy-right</footer>
                        </div>
                    </section>
                </Router>
            </div>)
    }
}

export default App;
