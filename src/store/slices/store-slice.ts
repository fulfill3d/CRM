import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    storeId: null,
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStoreId: (state, action) => {
            state.storeId = action.payload;
        },
        clearStoreId: (state) => {
            state.storeId = null;
        },
    },
});

export const { setStoreId, clearStoreId } = storeSlice.actions;

export default storeSlice.reducer;
