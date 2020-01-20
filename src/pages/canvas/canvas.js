import React, { Component } from 'react';
import './canvas.scss'

export default class Canvas extends Component {

    componentDidMount() {
        let mouseDown = false;
        let deltaX = 0;
        let deltaY = 0;
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const cw = canvas.width, ch = canvas.height;
        const rect = {
            x: 20,
            y: 20,
            width: 200,
            height: 100
        }

        // const canvasLeft = canvas.getBoundingClientRect().left;

        /** 画矩形 */
        ctx.rect(rect.x, rect.y, rect.width, rect.height)
        ctx.stroke();

        // ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

        ctx.font="16px Arial";
        ctx.fillStyle = "#008600"; 
        /** 设置为 center 时，文字段的中心会在 x 点 */
        ctx.textAlign = 'center';
        // 设置字体内容，以及在画布上的位置
        ctx.fillText("Hello!", 120, 75);


        const inputEle = document.getElementById('inputEle');
        inputEle.onkeyup =  function(e) {
            if(e.keyCode === 13) {
                console.log(inputEle.value)
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
                clearRect()
                strokeRect()
            }
        };  
        canvas.onmouseup = function(e){ 
            mouseDown = false
        };  

        /** isPointInPath 方法不支持 fillRect(),strokeRect() */
        console.log(ctx.isPointInPath(20, 20))


        // setTimeout(() => {
        //     /** 这里如果不调用 beginPath 历史的矩形会重新被绘制 */
        //     ctx.beginPath() 
        //     ctx.rect(rect.x +100, rect.y+100, rect.width, rect.height)
        //     ctx.stroke();
        // }, 4000)

        function clearRect() {
             /** 清除指定区域 */
            ctx.clearRect(0, 0, cw, ch)
        }
        
        function strokeRect() {
            ctx.beginPath() 
            ctx.rect(rect.x, rect.y, rect.width, rect.height)
            ctx.stroke();
            ctx.fillText("Hello!", rect.x + 100, rect.y + 55);
        }
        
    }

    render() {
        return (<div>
            <canvas id="canvas" className="cus-canvas"  width="1300" height="600"></canvas>
            <input id="inputEle" className="input-ele"/>
        </div>)
    }
}