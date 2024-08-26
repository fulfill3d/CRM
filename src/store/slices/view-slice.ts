import { createSlice } from '@reduxjs/toolkit';

export enum BusinessView {
    Cover = 'root',
    Depth1 = 'depth1',
    Depth2 = 'depth2',
}

export enum ClientView {
    Cover = 'root',
    Depth1 = 'depth1',
    Depth2 = 'depth2',
}

interface ViewState {
    businessView: BusinessView;
    clientView: ClientView;
}

const initialState: ViewState = {
    businessView: BusinessView.Cover,
    clientView: ClientView.Cover,
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setBusinessView(state, action) {
            state.businessView = action.payload;
        },
        setClientView(state, action) {
            state.clientView = action.payload;
        },
        resetBusinessView(state) {
            state.businessView = BusinessView.Cover;
        },
        resetClientView(state) {
            state.clientView = ClientView.Cover;
        },
    },
});

export const { setBusinessView, setClientView, resetBusinessView, resetClientView } = viewSlice.actions;
export default viewSlice.reducer;
