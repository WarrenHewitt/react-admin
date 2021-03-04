import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import './style/index.scss';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import logo from './assets/logo.png';

import route from './route/route'
import SwitchCom from './route/switch'

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
                { v.children ? v.children.map(val => (<Menu.Item key={val.id}><Link to={ val.path }>{ val.name }</Link></Menu.Item>)) : '' }
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
                            <SwitchCom/>
                            <footer className="footer">copy-right</footer>
                        </div>
                    </section>
                </Router>
            </div>)
    }
}

export default App;
