import { createSlice } from "@reduxjs/toolkit";

export const todoSlice  = createSlice({
    name: 'todoName',
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

export const { add, changeName } = todoSlice.actions;

export const selectCount = (state) => state.todoName;

export default todoSlice.reducer;