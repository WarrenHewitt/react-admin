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

        render() {
            console.log(super.render());
            const { type, needRender } = paramsObj;
            let NewEle = '';
            if(needRender) {
                const Ele = super.render();
                const newProp = {
                    nameNew: 'hw'
                }              
                // NewEle = React.cloneElement(Ele, newProp,);
            }
            return   '<NewEle/> '
            // return (<div>
            //     <h1 style={{ borderTop: '1px solid #fff', marginTop: '10px' }}>HOC公共不变标题</h1>
            //     <Button onClick={this.handleShowModal}>hoc common btn： {type}</Button>
            //     <NewEle/> 

            //     {/* 这里有两种方式：也可以替换为组件形式：<InputComponent/> */}
            //     {/* render 劫持  这里可以通过一些判断，选择是否需要render操作 */}
            //     { needRender ? 123 : super.render() }
            // </div>)
        }
    }
}