import {createSlice} from "@reduxjs/toolkit";

export const shownTaskSlice = createSlice({
    name: 'shownTask',
    initialState: {
        value: [],
    }, 
    reducers:{
        shownTaskAdded(state, action){
            const newItem = {
                name: action.payload.name,
                taskListArr: []
            }
            state.value.push(newItem)
        },
        shownTaskRemove(state, action){
            const id = action.payload
            state.value.splice(id, 1)
        },
        addTaskArr(state, action){
            const {id, taskElement} = action.payload
            const newItem = {
                name: taskElement.name,
                description: taskElement.description,
                done: false,
                priority: false,
                subtaskArr: []
            }
            state.value[id].taskListArr = state.value[id].taskListArr.concat(newItem)
        },
        taskRemove(state, action){
            const {taskId, taskListId} = action.payload
            state.value[taskListId].taskListArr.splice(taskId, 1)
        },
        taskEdit(state, action){
            const {taskListId, taskId, taskItem, taskItemEdited} = action.payload
            const newItem = {
                name: taskItemEdited.name ,
                description: taskItemEdited.description,
                priority: taskItem.priority,
                done: taskItem.done,
                subtaskArr: taskItem.subtaskArr
            }
            state.value[taskListId].taskListArr.splice(taskId, 1, newItem)
        },
        taskPriority(state, action){
            const {taskId, taskListId, taskItem} = action.payload
            const newPriority = !taskItem.priority 
            const newItem = {
                name: taskItem.name,
                description: taskItem.description,
                priority: newPriority,
                done: taskItem.done,
                subtaskArr: taskItem.subtaskArr
            }
            state.value[taskListId].taskListArr.splice(taskId, 1, newItem)
        },
        subtaskAdded(state, action){
            const {taskId, taskListId, subtaskItem} = action.payload
            const newItem = {
                name: subtaskItem.name ,
                description: subtaskItem.description,
                done: false
            }
            state.value[taskListId].taskListArr[taskId].subtaskArr = state.value[taskListId].taskListArr[taskId].subtaskArr.concat(newItem)
        },
        subtaskRemove(state, action){
            const {taskId, taskListId, subtaskId} = action.payload
            state.value[taskListId].taskListArr[taskId].subtaskArr.splice(subtaskId, 1)
        },
        subtaskDone(state, action){
            const {taskId, taskListId, subtaskId} = action.payload
            state.value[taskListId].taskListArr[taskId].subtaskArr[subtaskId].done = true
        }
    }
});

export const {shownTaskAdded, shownTaskRemove, addTaskArr, taskRemove, taskEdit, taskPriority, subtaskAdded, subtaskRemove, subtaskDone} = shownTaskSlice.actions;
export default shownTaskSlice.reducer;