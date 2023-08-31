import { configureStore } from '@reduxjs/toolkit';
import showCompletedReducer from './features/showCompletedSlice';
import shownTaskAddedReducer from './features/shownTaskSlice';
import completedRuducer from './features/completedSlice'

const store = configureStore({
  reducer:{
    showUp: showCompletedReducer,
    shownTask: shownTaskAddedReducer,
    completed: completedRuducer,
  }
});

export default store;