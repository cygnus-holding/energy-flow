import { createSlice } from '@reduxjs/toolkit';

export const iframeSlice = createSlice({
  name: 'iframe',
  initialState: {
    loaded: false,
  },
  reducers: {
    loadIframe: state => {
      state.loaded = true;
    },
  },
});

export const { loadIframe } = iframeSlice.actions;
export default iframeSlice.reducer;
