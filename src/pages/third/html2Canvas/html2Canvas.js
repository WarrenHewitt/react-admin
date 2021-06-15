import React, { Component } from 'react';

import { Table, Button } from 'antd';
import html2canvas from 'html2canvas';

import logo from '@/assets/logo.png';

import './h2c.scss';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => text,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>内容</span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

class Html2CanvasC extends Component{

    generateCanvas = () => {
        html2canvas(document.querySelector('#needToCanvas')).then((canvas) => {
            document.querySelector('#canvasWrapper').appendChild(canvas)
        })
    }

    render() {
        return (<div>
            <a href="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1694681277,1453280371&fm=26&gp=0.jpg" download="">图片下载</a>
            <div id="needToCanvas">
            <Table columns={columns} dataSource={data} />
                <div className="buttonWrapper">
                    <Button type="primary" onClick={ this.generateCanvas }>生成canvas</Button>
                </div>
                <div><img className="ti" src={ logo } alt="no"></img></div>
            </div>
            <div id="canvasWrapper"></div>
        </div>)
    }
}

export default Html2CanvasC