import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.jsx'
import { persistReducer, persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import { version } from 'react';
const rootReducer = combineReducers({ user: userReducer });

const persistConfig ={
  key: 'root',
  version:1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)
