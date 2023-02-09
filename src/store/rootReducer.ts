import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/countSlice';
const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
