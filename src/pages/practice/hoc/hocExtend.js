import React, { Component } from 'react';
import { Button } from 'antd';

// export default (paramsObj = {
//     type: 'one'
// }) => (InputComponent) => class extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible: false,
//             ...paramsObj
//         }
//     }
export default  (paramsObj = {
    type: 'one'
}) =>(InputComponent) => {
    /**
     * @des 反向继承：注意此处是继承了传入的组件
     */
    return class HocExtend extends InputComponent {
        constructor(props) {
            super(props);
            this.state = {
                type: 'two'
            }
        }

        /** 设置高阶组件名称，以便在插件Components中查看调试 */
        static displayName = 'HocDisplayName'

        hocExtendFn() {
            console.log('hoc extend two');
        }

        cloneClick() {
            console.log('clone click!!!')
        }

        render() {
            const Ele = super.render();
            const newProp = {
                onClick: this.cloneClick
            }     
                        
            const NewEle = React.cloneElement(Ele, { ...newProp });
       
            return (<div>
                <h1 style={{ borderTop: '1px solid #fff', marginTop: '10px' }}>HOC公共不变标题</h1>
                <Button onClick={this.handleShowModal}>hoc common btn</Button>

                {/* 这里有两种方式：也可以替换为组件形式：<InputComponent/> */}
                {/* render 劫持  这里可以通过一些判断，选择是否需要render操作 */}
                { NewEle }

                {/* 这里也可以直接 super.render() */}
            </div>)
        }
    }
}