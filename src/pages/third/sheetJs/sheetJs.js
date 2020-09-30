import React, { Component } from 'react';
import XLSX from 'xlsx/dist/xlsx.mini.min.js';
import { Button } from 'antd';

export default class SheetJs extends Component{

    componentDidMount() {}

    exportData = () => {
        /**
         * @des 生成excel
         * @param { Array } data ([[name, score],['hew', 80]]) 
         * @param { String } name 表格名称
         */
        const fn = (data, name) => {
            name = name || 'table';
            /** 设置文件名以及格式, 默认xlsx */
            const filename = /\./.test(name) ? name : `${name}.xlsx`;
            /** Excel第一个sheet的名称 */
            const wsName = 'sheet'; 
            const newBook = XLSX.utils.book_new();
            /* 将数组或数组列表转换成工作表 */
            const ws = XLSX.utils.aoa_to_sheet(data);
            /** 将数据添加到工作薄 */
            XLSX.utils.book_append_sheet(newBook, ws, wsName);  
            XLSX.writeFile(newBook, filename);
        }

        fn([
            ['h1','h2','h3', 'h4'], 
            [1,2,3,4],
            [true, false, null, 5],
            [true, false, null, '中文'],
        ], '表格')
    }

    /* 表格合并 */
    mergeTable = () => {
        const ws = XLSX.utils.aoa_to_sheet([['a', 'b', 'c', 'd', 'e'],[1,2,3, 'merge', 5], [11,null,31, null, 51]])
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'sheetname')

        console.log('导出数据',ws);

        ws['!merges'] = [
            { s: { r:1 ,c:3 }, e: { r: 2, c: 3} },
            { s: { r:2 ,c:0 }, e: { r: 2, c: 1} },
        ]

        XLSX.writeFile(wb, 'excelname.xlsx');
    }

    tableToExcel= () => {
        var elt = document.getElementById('data-table');
        /* 将一个table DOM 转换为 */
        var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet JS"});
        XLSX.writeFile(wb,'test.xlsx');
    }

    render() {
        return (<div className="custom-part">
            <pre>
                excel 后缀说明：
                    1. xls为Excel97-2003版本的格式
                    2. xlsb为二进制工作簿
                    3. xlsx为Excel2007或以上版本的格式
            </pre>
            <div>
                <p>表格可以隐藏</p>
                <table id="data-table" border="1">
                    <tbody>
                        <tr><td colSpan="4" style={{ background: 'red' }}>Some merged cell</td></tr>
                        <tr><td>This</td><td>is</td><td>a</td><td>Test</td></tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <Button type="primary" onClick={this.exportData}>导出</Button>
            <div style={{margin: '10px 0'}}><Button type="primary" onClick={this.tableToExcel}>导出合并了单元格的html table</Button></div>
            <div style={{margin: '10px 0'}}><Button type="primary" onClick={this.mergeTable}>合并单元格</Button></div>
        </div>)
    }
}