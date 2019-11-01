import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import '../../public/css/home.scss'

import Menus from './menu';

import PageOne from '../page1/page1.js.js.js'
import PageTwo from '../page2/page2.js.js.js'

import Mock from 'mockjs'



const Header = (props) => {
    return (<header>
        <div className="banner">
            <Link to="/"><div className="logo"></div></Link>
            <Link to="/menu">菜单</Link>
            <Link to="/other">其它</Link>
            <Link to="/admin/page1/151515">其它111</Link>
        </div>
    </header>)
}

const Footer = (props) => {
    return (<footer>
        底部
        </footer>)
}


class Home extends React.Component {

    render() {


        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        // 输出结果
        /* console.log(JSON.stringify(data))

        alert($.get('/look',function(d) {
            alert(d);
        }));

        fetch('/look',{method:'get'}).then((res)=>{
            return res.text();
        }).then((data)=>{
            alert(data);
        }) */

        return (
            <Layout>
                <Header />
                <div >
                    <div style={{float:'left'}}>
                        <Menus />
                    </div>
                    <div style={{float:'left'}}>

                        <Route path='/admin/page1/:id' component={PageOne} />
                        <Route path='/admin/page2' component={PageTwo} />
                    </div>
                </div>


                <Footer />
            </Layout>
        )
    }
}

export default Home