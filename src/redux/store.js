import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice/dataSlice';

const store = configureStore({
  reducer: {
    finance: dataReducer,
  },
});

export default store;
