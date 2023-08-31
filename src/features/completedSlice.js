import {createSlice} from "@reduxjs/toolkit";

export const completedSlice = createSlice({
    name: 'completed',
    initialState: {
        value: [],
    }, 
    reducers:{
        completedAdded(state, action){
            state.value.push(action.payload)
        },
        completedAll(state, action){
            const taskArr = action.payload
            state.value = state.value.concat(taskArr)
        },
        completedRemove(state, action){
            const id = action.payload
            state.value.splice(id, 1)
        },
        completedCrear(state){
            state.value = []
        }
    }
});

export const {completedAdded, completedAll, completedRemove, completedCrear} = completedSlice.actions;
export default completedSlice.reducer;