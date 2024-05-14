import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pollSlice from './slices/poll';
import { pollApi } from '../api/pollApi';

const reducer = combineReducers({
  poll: pollSlice.reducer,
  [pollApi.reducerPath]: pollApi.reducer,
});

const middlewares = [
  pollApi.middleware,
];

export const store = () => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof reducer>;
