import React, { Component } from 'react';
import './canvas.scss'
import { Button } from 'antd';

export default class Canvas extends Component {
    constructor(){
        super();
        this.canvas = null;
        this.ctx = null;
    }

    componentDidMount() {
        let mouseDown = false;
        const canvas = document.getElementById('drawBoard');
        const ctx = canvas.getContext('2d');

        this.canvas = canvas;
        this.ctx = ctx;

        const rect = canvas.getBoundingClientRect();
        /** canvas标签距离屏幕适口的位置 */
        const cl = rect.left;
        const ct = rect.top;

        const randomColor = () =>{
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            return color.padEnd(7, 'f');
        }

        /** 记录起始位置 */
        let sx = '', sy= '';
        const draw = (x,y) => {
            ctx.beginPath();
            ctx.strokeStyle = randomColor();
            // ctx.strokeStyle = 'black';
            ctx.moveTo(sx, sy);
            /** 将结束位置设置为下一次起始位置 */
            sx = x-cl;
            sy = y-ct;
            ctx.lineTo(sx, sy)
            ctx.stroke();
        }
        canvas.onmousedown = function(e){ 
            ctx.lineWidth = 2;
            ctx.lineJoin='round'
            ctx.lineCap = 'round';
            ctx.shadowBlur = 1;
            ctx.shadowColor = 'rgb(0, 0, 0)';
            
            mouseDown = true
            sx = e.clientX - cl;
            sy = e.clientY - ct;
        };  
        canvas.onmousemove = function(e){ 
            if(mouseDown) {
                draw(e.clientX, e.clientY)
            }
        };  
        canvas.onmouseup = function(e){ 
            mouseDown = false
        }; 
        canvas.onmouseout = function(e){ 
            mouseDown = false
        }; 
    }

    /** 清除画布 */
    handleClear = ()=> {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    render() {
        return (<div>
            <div className="draw-board-part">
                <div>
                    <canvas id="drawBoard" className="draw-board"  width="600" height="600"></canvas>
                </div>
                <div>
                    <Button onClick={this.handleClear}>清除</Button>
                </div>
            </div>
        </div>)
    }
}