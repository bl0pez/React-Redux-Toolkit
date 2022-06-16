import { createSlice } from '@reduxjs/toolkit';

export const golaSlice = createSlice({
    name: 'dadsad',
    initialState: {
        counter: 10
    },
reducers: {
    increment: (state, /* action */ ) => {
    state.counter += 1;
        },
    }
});


export const { increment } = golaSlice.actions;