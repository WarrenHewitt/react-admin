import React from 'react';
// import { Button } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const Header = () => {
    return (<header className="app-header">
        <img src="./logo.png" className="app-logo" alt="logo" />
        <span className="h-title">REACT-ADMIN</span>
    </header>);
}

class App extends React.Component {
    state = {
        collapsed: false,
        menuList: [{
            id: '0',
            icon: 'inbox',
            name: 'page0'
        }, {
            id: '1',
            icon: 'pie-chart',
            name: 'page1',
            children: [{
                id: '1-1',
                name: 'page1-1',
                url: '/page1',
            }]
        }, {
            id: '2',
            icon: 'desktop',
            name: 'page2',
            children: [{
                id: '2-1',
                name: 'page2-1',
                url: '/page2',
            }]
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
