import React, { Component } from 'react';
import './canvas.scss'

export default class Canvas extends Component {

    componentDidMount() {
        let mouseDown = false;
        let deltaX = 0;
        let deltaY = 0;
        let text = 'hello'
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const cw = canvas.width, ch = canvas.height;
        const rect = {
            x: 20,
            y: 20,
            width: 150,
            height: 50
        }

        /** 设置文字和边框样式 */
        ctx.font="16px Arial";
        ctx.fillStyle = "#fff"; 
        /** 设置为 center 时，文字段的中心会在 fillText的 x 点 */
        ctx.textAlign = 'center';
        ctx.lineWidth = '2';
        ctx.strokeStyle = '#fff';

        strokeRect()

        const inputEle = document.getElementById('inputEle');
        inputEle.onkeyup =  function(e) {
            if(e.keyCode === 13) {
                text = inputEle.value
                strokeRect()
                inputEle.setAttribute('style', `display:none`)
            }
        }

        canvas.ondblclick = function(e){ 
            inputEle.setAttribute('style', `left:${e.clientX}px;top:${e.clientY}px;display:block`);
            inputEle.focus();
        }

        canvas.onmousedown = function(e){ 
            /** 获取视口左边界与canvas左边界的距离 加上 鼠标点击位置与canvas左边界的长度，这个值是相对移动过程中不变的值 */
            deltaX=e.clientX - rect.x;
            deltaY=e.clientY - rect.y;
            mouseDown = true
        };  

        const judgeW = cw-rect.width, judgeH = ch-rect.height;

        canvas.onmousemove = function(e){ 
            if(mouseDown) {
                /** 相减即可获得矩形左边界与canvas左边界之间的长度 */
                let dx = e.clientX-deltaX; 
                let dy = e.clientY-deltaY; 
                if(dx < 0) {
                    dx = 0;
                } else if (dx > judgeW) {
                    dx = judgeW;
                }
                if(dy < 0) {
                    dy = 0;
                } else if(dy > judgeH) {
                    dy = judgeH;
                }
                rect.x = dx;
                rect.y = dy; 
                strokeRect()
            }
        };  
        canvas.onmouseup = function(e){ 
            mouseDown = false
        };  

        /** 清除指定区域 */
        function clearRect() {
            ctx.clearRect(0, 0, cw, ch)
        }
        
        /** 画矩形 */
        function strokeRect() {
            clearRect()

            /** 这里如果不调用 beginPath 历史的矩形会重新被绘制 */
            ctx.beginPath() 
            ctx.rect(rect.x, rect.y, rect.width, rect.height)
            ctx.stroke();
            // 设置字体内容，以及在画布上的位置
            ctx.fillText(text, rect.x + 70, rect.y + 30);
        }
        
    }

    render() {
        return (<div>
            <canvas id="canvas" className="cus-canvas"  width="1300" height="600"></canvas>
            <input id="inputEle" className="input-ele"/>
        </div>)
    }
}