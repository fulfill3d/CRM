import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '@/store/slices/view-slice';

const store = configureStore({
    reducer: {
        view: viewReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
