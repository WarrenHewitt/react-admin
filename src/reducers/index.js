import { combineReducers } from 'redux'

import page1 from './page1/page1.js'
import page2 from './page2/page2.js'

/**
 * 合并多个reducer
 * reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理,这里简化处理key和函数名一样
 */

function user(state = {}, action) {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                name: action.data
            }
        default:
            return state
    }
}

export default combineReducers({
    user,
    page1,
    page2,
})