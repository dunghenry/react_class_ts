import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IState {
    value: number;
}
const initialState: IState = {
    value: 1,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: IState, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
