import {
    PAGE1
} from '../actionTypes'

export const page1 = (data) => dispatch => {
        dispatch({
            type: PAGE1,
            data: data
        })
}

const test2=(data)=>({
    type: PAGE1,
    data: data
})

export const user = (data) => dispatch => {
    dispatch({
        type: "USER",
        data: "hew2"
    })
}

export const test1 = (data) => ({
    type: PAGE1,
    data: data
})

