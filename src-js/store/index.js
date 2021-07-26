import { configureStore } from '@reduxjs/toolkit';
import businessDataStore from './businessDataStore';

const store = configureStore(
  {
    reducer: {
      businessData: businessDataStore.reducer,
    }
  }
);

export default store;