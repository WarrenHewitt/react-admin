import { createSlice } from "@reduxjs/toolkit";

export const rootSlice  = createSlice({
    name: 'testSlice',
    initialState: {
        name: 'hew',
        count: 0
    },
    reducers: {
        add: (state) => {
            // 这里是因为使用了Immer库，所以能够使用这种直接修改state的语法，但其实并不是mutate
            // 官方说明： Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1;
        },
        changeName(state) {
            state.name = 'warren'
        },
        addAnyNumber: (state, action) => {
            console.log(action);
            // { payload: 10, type: "testSlice/addAnyNumber" }
            state.count += action.payload
        },
    }
})

export const { add, changeName, addAnyNumber } = rootSlice.actions;

/* 异步处理 */
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const subtractAsync = number => dispatch =>  {
    setTimeout(() => {
        dispatch(addAnyNumber(number))
    }, 1000);
}    

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
/* 这里的 storeReducer  根据 store.js 中定义而定 */
/* 这里也可以不先定义  直接在页面中获取 */
export const selectCount = (state) => state.storeReducer.count;

export default rootSlice.reducer;


