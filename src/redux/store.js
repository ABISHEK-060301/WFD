'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { adminSlice } from './adminSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Configuration for redux-persist
const persistConfig = {
  key: 'WildFlourDesserts@123',
  storage,
  whitelist: ['admin'],
};

const rootReducer = combineReducers({
  admin: adminSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

export const persistor = persistStore(store);


