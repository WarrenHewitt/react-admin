/*class Menu extends React.Component {

import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {test} from '../action/text.js'

// 通过ajax加载数据
class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastGistUrl: ''
        }
    }

    componentDidMount() {
        //ajax如果组件渲染到了 DOM 中，isMounted() 返回 true。可以使用该方法保证 setState() 和 forceUpdate() 在异步场景下的调用不会出错。
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    }

    componentWillUnmount() {
        // 用jquery的abort方法终止掉请求
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                ajax测试返回的数据【
                {this.state.username}】
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
}

// 生命周期探究
class LifeCycle extends React.Component {

    // mounting
    constructor(props) {
        super(props);
        alert("Initial render");
        alert("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount() {
        alert("componentWillMount");
    }

    componentDidMount() {
        alert("componentDidMount");
    }

    // updating
    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        alert("componentWillUpdate");
    }

    componentDidUpdate() {
        alert("componentDidUpdate");
    }

    componentWillUnmount() {
        alert("componentWillUnmount");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        alert("render");
        return (
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        console.log('findDOMNode',ReactDOM.findDOMNode(this.rLifeCycle));
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle() {
        // 这里卸载父组件也会导致卸载子组件
        console.log('建议是不用卸载方法');
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" onClick={this.propsChange.bind(this)}>propsChange</a> <br/>
                <a href="javascript:;" onClick={this.setLifeCycleState.bind(this)}>setState</a> <br/>
                <a href="javascript:;" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a> <br/>
                <a href="javascript:;" onClick={this.unmountLifeCycle.bind(this)}>unmount</a> <br/>
                <a href="javascript:;" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
                <br/>
                <LifeCycle ref={rLifeCycle=>{this.rLifeCycle=rLifeCycle}} num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

class Child extends React.Component {

    render() {
        return <p>child</p>
    }
}

class TestRefFn extends React.Component {
    render() {
        return (
            <div>
                <div ref={div => { this._div = div }}>
                    app
                </div>
                <Child ref={child => this._child = child}/>
                <button onClick={()=> {
                    console.log('_div',this._div);
                    console.log('_child',this._child);
                    console.log(ReactDOM.findDOMNode(this._div) === this._div);
                    console.log(ReactDOM.findDOMNode(this._child));
                }}>
                    log refs
                </button>
            </div>
        )
    }
}

*/

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {page1} from '../../actions/page1/page1.js'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
    constructor(props){
        super(props);
        this.state={
            current: '1',
            openKeys: [],
        }
    }

    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 240 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
                >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>page1</span></span>}>
                    <Menu.Item key="1">
                         <Link to="/admin/page1">页面1</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>page2</span></span>}>
                    <Menu.Item key="2">
                    <Link to="/admin/page2">页面2</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}


export default connect((state) => ({
    data: state.page1.data
}))(Menus) 
