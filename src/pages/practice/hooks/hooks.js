import React, { Component, useState } from "react"
import { Button } from 'antd'

function Hook1 () {
    let [ count, setCount ] = useState(0)
    let [ count1, setCount1 ] = useState(23333)
    /* 用于比较差异 */
    let count2 = 2
    return (<div>
        <span>当前count值：{ count } - { count1 } - { count2 }</span>
        <Button onClick={ () => setCount(count+1) }>按钮</Button>
        <Button onClick={ () => setCount1(count1 => count1 + 100) }>按钮1</Button>
        <Button onClick={ () => count2++ }>按钮2</Button>
    </div>)
}

class Hooks extends Component {
    render() {
        return (<div>
            nihao
            <Hook1/>
        </div>)
    }
}


export default Hooks