import { createSlice } from '@reduxjs/toolkit';

const businessDataStore = createSlice({
  name: 'businessDataStore',
  initialState: {
    businesses: [],
  },
  reducers: {
    setBusinesses(state, action) {
    state.businesses = action.payload;
    },
  },
});

export const businessDataStoreActions = businessDataStore.actions;

export default businessDataStore;