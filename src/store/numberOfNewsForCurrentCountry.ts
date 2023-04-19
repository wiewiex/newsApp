import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INumberOfNewsForCurrentCountry } from './types';

export const initialState = {
  numberOfNews: 0,
};

export const numberOfNewsForCurrentCountrySlice = createSlice({
  name: 'numberOfNewsForCurrentCountry',
  initialState,
  reducers: {
    updateNumberOfNews: (
      state: INumberOfNewsForCurrentCountry,
      action: PayloadAction<number>
    ) => {
      state.numberOfNews = action.payload;
    },
  },
});

export const { updateNumberOfNews } =
  numberOfNewsForCurrentCountrySlice.actions;

export default numberOfNewsForCurrentCountrySlice.reducer;
