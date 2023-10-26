import { configureStore } from '@reduxjs/toolkit'
import fifteenReducer from './Fifteen.Slice';

export const store = configureStore({
    reducer: {
        fifteen: fifteenReducer,
    },
});
    
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

