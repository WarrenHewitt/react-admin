import './jp.scss';
import React, { Component } from 'react';
import { Button } from 'antd';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

class JsPdfC extends Component{
    generatePdf = () => {
        html2canvas(document.querySelector('.need-pdf')).then((canvas) => {
            let canvasWidth = canvas.width
            let canvasHeight = canvas.height
            // a4纸的尺寸[595.28,841.89]
            let pageHeight = canvasWidth / 592.28 * 841.89
            let imgWidth = 595.28
            let imgHeight = 592.28 / canvasWidth * canvasHeight
            let pageData = canvas.toDataURL('image/jpeg', 1.0)

            let pdf = new jsPDF('', 'pt', 'a4')
            if (canvasHeight < pageHeight) {
                // 参数说明：图片数据，格式，距左边距，距上边距，图宽，图高，...(其它参数)  这里的单位都和上面创建pdf实例时一致
                pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
            } else {
                // 分页操作，以下操作方式较为粗糙，分页处直接分割内容 
                let theRestHeight = canvasHeight;
                let y = 0;
                while (theRestHeight > 0) {
                    // 原理是将同一张图放在不同页面，但上移不同的距离，实现分页
                    pdf.addImage(pageData, 'JPEG', 0, y, imgWidth, imgHeight)
                    theRestHeight -= pageHeight
                    y -= 841.89
                    if (theRestHeight > 0) {
                        pdf.addPage()
                    }
                }
            }
            pdf.save('table.pdf')
        })
    }
    render() {
        return(<div>
            <div className="need-pdf">
                <h3>thie is title</h3>
                <table border="1">
                    <tbody>
                        <tr><td>1</td><td>2</td><td>3</td></tr>
                        <tr><td>a</td><td>b</td><td><img className="ti" src={ require('../../../public/logo.png')} alt="no"></img></td></tr>
                    </tbody>
                </table>
            </div>
            <div className="btn">
                <Button type="primary" onClick={ this.generatePdf }>生成pdf</Button>
            </div>
        </div>)
    }

}

export default JsPdfC