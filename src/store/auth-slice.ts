import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    businessAccessToken: string | null;
    clientAccessToken: string | null;
}

const initialState: AuthState = {
    businessAccessToken: null,
    clientAccessToken: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBusinessAccessToken: (state, action: PayloadAction<string>) => {
            state.businessAccessToken = action.payload;
        },
        setClientAccessToken: (state, action: PayloadAction<string>) => {
            state.clientAccessToken = action.payload;
        },
        clearAccessToken: (state) => {
            state.businessAccessToken = null;
            state.clientAccessToken = null;
        },
    },
});

export const { setBusinessAccessToken, setClientAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
