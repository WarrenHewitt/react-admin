import React, { Component } from 'react';
import XLSX from 'xlsx/dist/xlsx.mini.min.js';
import { Button } from 'antd';

export default class SheetJs extends Component{

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

    render() {
        return (<div className="custom-part">
            <pre>
                excel 后缀说明：
                    1. xls为Excel97-2003版本的格式
                    2. xlsb为二进制工作簿
                    3. xlsx为Excel2007或以上版本的格式
            </pre>
            <Button type="primary" onClick={this.exportData}>导出</Button>
        </div>)
    }
}