import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import combineReducer from '../reducers'

const preloadedState = {
    loading:false,
    user:{
        name:''
    },
    page1: {
        data: [],
        Info:{
            name:'',
            age:0,
            innerInfo:{
                i1:'',
                i2:''
            }
        }
    },
    page2:{
        data:[]
    }
}

/**
 *创建store
 *@param {function}  reducer:接收两个参数，当前state树和要处理的action，返回新的state
 *@param {any}  preloadedState 初始的state
 *@param {Function} enhancer
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk,logger)
));



