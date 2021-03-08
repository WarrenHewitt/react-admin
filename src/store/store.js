import { configureStore } from '@reduxjs/toolkit'

// configureStore()
// 提供简化的配置选项和良好的默认值。它可以自动组合众多的reducers，添加用户提供的任何Redux中间件，默认情况下包括Redux -thunk(处理异步Action的中间件)，并支持使用Redux DevTools扩展。


import rootReducer from './slice/rootReducer.js'


// configureStore: 对 createStore 
export default configureStore({
    reducer: {
        storeReducer: rootReducer
    }
})
