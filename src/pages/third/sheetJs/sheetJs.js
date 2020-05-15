import React, { Component } from 'react';
import XLSX from 'xlsx/dist/xlsx.mini.min.js';
import { Button } from 'antd';

export default class SheetJs extends Component{

    componentDidMount() {

        var a = {
            '!merge': 'nihao'
        }
        console.log(a['!merge']);
    }

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

    mergeTable = () => {
        const ws = XLSX.utils.aoa_to_sheet([['a', 'b', 'c', 'd'],[1,2,3, null]])
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'sheetname')

        ws['!merges'] = [
            { s: { r:0 ,c:3 }, e: { r: 1, c: 3} }
        ]

        XLSX.writeFile(wb, 'excelname.xlsx');

    }

    tableToExcel= () => {
        this.mergeTable()
        // var elt = document.getElementById('data-table');
        // /* 将一个table DOM 转换为 */
        // var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet JS"});
        // XLSX.writeFile(wb,'test.xlsx');
        // return dl ?
        //     XLSX.write(wb, {bookType:type, bookSST:true, type: 'base64'}) :
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
                <table id="data-table" border="1">
                    <tbody>
                        <tr><td contentEditable="true" colSpan="4">Some merged cell</td></tr>
                        <tr><td contentEditable="true">This</td><td contentEditable="true">is</td><td contentEditable="true">a</td><td contentEditable="true">Test</td></tr>
                    </tbody>
                </table>
            </div>
            <Button type="primary" onClick={this.exportData}>导出</Button>
            <Button type="primary" onClick={this.tableToExcel}>导出html table</Button>
        </div>)
    }
}