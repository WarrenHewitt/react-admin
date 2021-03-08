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
            state.count += 1;
        },
        changeName: (state) => {
            state.name = 'warren'
        }      
    }
})

// https://juejin.cn/post/6844904129178009613#heading-7

export const { add, changeName } = rootSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
/* 这里的 storeReducer  根据 store.js 中定义而定 */
/* 这里也可以不先定义  直接在页面中获取 */
export const selectCount = (state) => state.storeReducer.count;

// export const selectAll = (state) => state;

export default rootSlice.reducer;


