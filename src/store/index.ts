import { configureStore } from '@reduxjs/toolkit';
import numberOfNewsForCurrentCountry from './numberOfNewsForCurrentCountry';
import articlesLayout from './articlesLayout';

const store = configureStore({
  reducer: {
    numberOfNewsForCurrentCountry,
    articlesLayout,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
