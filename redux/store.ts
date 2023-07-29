import { configureStore } from '@reduxjs/toolkit';
import iframeReducer from './iframeSlice';

export const store = configureStore({
  reducer: {
    iframe: iframeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
