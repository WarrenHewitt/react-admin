import React, { Component } from 'react';
import { Modal, Input } from 'antd';

export default class ComponentTwo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        console.log('componentTwo didMount');
        this.hocExtendFn();
    }

    handleShowModal = () => {
        console.log(1233)
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
        const { type } = this.props;
        const { visible } = this.state;

        console.log('two prop', this.props);
        return(<div>
            nihao
        </div>)
        // return(<div>
        //     <Modal
        //         title={ `component ${type}` }
        //         visible={ visible }
        //         onOk={ this.handleOk }
        //         onCancel={ this.handleCancel }
        //     >
        //         <p>请输入：</p>
        //         <Input/>
        //     </Modal>
        // </div>)
    }
}