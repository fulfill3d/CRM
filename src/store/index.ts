import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '@/store/slices/view-slice';
import storeReducer from '@/store/slices/store-slice';

const store = configureStore({
    reducer: {
        view: viewReducer,
        store: storeReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
