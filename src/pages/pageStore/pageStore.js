import React from 'react';
import { useSelector }  from 'react-redux'

import { selectCount  } from '@/store/slice/rootReducer'

function PageStore () {
    const count =  useSelector(selectCount)
    const name =  useSelector(state => state.storeReducer.name)

    return (<div>
        <h1>pageStore</h1>
        <h1>直接在页面中获取:{ name }</h1>
        <h1>用预先定义的 selector 获取:{ count }</h1>
    </div>)

}

export default PageStore