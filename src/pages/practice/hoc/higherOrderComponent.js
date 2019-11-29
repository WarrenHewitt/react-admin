import React, { Component } from 'react';
import { Button } from 'antd';

export default (paramsObj = {
    type: 'one'
}) => (InputComponent) => class HOC extends Component {
    /**
     * @des 属性代理形式的高阶组件,没有继承传入的组件
     */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            ...paramsObj
        }
    }

    /** 设置高阶组件名称，以便在插件Components中查看调试 */
    static displayName =  'HocDisplayName'

    handleShowModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (<div>
            <h1 style={{ borderTop: '1px solid #fff', marginTop: '10px' }}>HOC公共不变标题</h1>
            <Button onClick={this.handleShowModal}>hoc common btn： {paramsObj.type}</Button>

            {/* 这里将state和方法都已配置为prop传入,并且可以做修改; 这就是属性代理 */}
            <InputComponent {...this.state} {...this.props} handleCancel={this.handleCancel} handleOk={this.handleOk} />
        </div>)
    }
}