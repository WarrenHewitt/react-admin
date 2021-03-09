import React from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch }  from 'react-redux'

import { selectCount, changeName, add, addAnyNumber, subtractAsync  } from '@/store/slice/rootReducer'

function PageStore () {
    const count =  useSelector(selectCount)
    const dispatch =  useDispatch()
    const name =  useSelector(state => state.storeReducer.name)

    const changeNameFn = () => {
        dispatch(changeName())
    }

    const addFn = () => {
        dispatch(add())
    }

    const addAnyFn = () => {
        dispatch(addAnyNumber(10))
    }

    const addAnyAsyncFn = () => {
        dispatch(subtractAsync(5))
    }

    return (<div>
        <h1>pageStore</h1>
        <h1>直接在页面中获取:{ name }</h1>
        <h1>用预先定义的 selector 获取:{ count }</h1>
        <Button type="primary" onClick={ addFn }>数字加一</Button>
        <Button type="primary" onClick={ addAnyAsyncFn }>数字异步加5</Button>
        <Button type="primary" onClick={ addAnyFn }>数字加10</Button>
        <Button onClick={ changeNameFn }>修改名称</Button>
    </div>)

}

export default PageStore