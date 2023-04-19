import { createSlice } from '@reduxjs/toolkit';
import { IArticlesLayout } from './types';

export const initialState: IArticlesLayout = {
  isList: true,
};

export const articlesLayoutSlice = createSlice({
  name: 'articlesLayout',
  initialState,
  reducers: {
    switchLayout: (state: IArticlesLayout) => {
      state.isList = !state.isList;
    },
  },
});

export const { switchLayout } = articlesLayoutSlice.actions;

export default articlesLayoutSlice.reducer;
