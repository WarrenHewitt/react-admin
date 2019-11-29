import React, { Component } from 'react';
import { Modal } from 'antd';

export default class ComponentOne extends Component{
    render() {
        /**
         * @des 这里将通过prop获取传入的属性和方法
         */
        const { visible, type, handleOk, handleCancel } = this.props;

        return(<div>
            <Modal
                title={ `component ${type}` }
                visible={ visible }
                onOk={ handleOk }
                onCancel={ handleCancel }
            >
                <p>这里只是纯文本</p>
                <p>这里只是纯文本</p>
            </Modal>
        </div>)
    }
}