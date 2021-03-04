import { configureStore, createReducer } from '@reduxjs/toolkit'

// configureStore()
// 提供简化的配置选项和良好的默认值。它可以自动组合众多的reducers，添加用户提供的任何Redux中间件，默认情况下包括Redux -thunk(处理异步Action的中间件)，并支持使用Redux DevTools扩展。


import todoReducer from './slice/todo.js'

const counterReducer = createReducer(0, {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload
})

// configureStore: 对 createStore 
export default configureStore({
    reducer: {
        todo: todoReducer
    }
})