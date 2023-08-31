import {createSlice} from "@reduxjs/toolkit";

export const showCompletedSlice = createSlice({
    name: 'showCompleted',
    initialState: {
        value: true,
    }, 
    reducers:{
        showUp: (state) => {
            state.value = !state.value
        }
    }
});

export const {showUp} = showCompletedSlice.actions;
export default showCompletedSlice.reducer;