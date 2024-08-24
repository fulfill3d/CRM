import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    businessView: 'default', // 'default', 'businessView1', 'businessView2', etc.
    clientView: 'default',   // 'default', 'clientView1', 'clientView2', etc.
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setBusinessView(state, action) {
            state.businessView = action.payload; // Set specific business view
        },
        setClientView(state, action) {
            state.clientView = action.payload; // Set specific client view
        },
        resetBusinessView(state) {
            state.businessView = 'default'; // Reset to default view
        },
        resetClientView(state) {
            state.clientView = 'default'; // Reset to default view
        },
    },
});

export const { setBusinessView, setClientView, resetBusinessView, resetClientView } = viewSlice.actions;
export default viewSlice.reducer;
