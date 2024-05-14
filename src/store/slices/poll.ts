import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PollItem } from '../../types';

const initialState: PollItem[] = [];

const pollSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    setPolls(state, action: PayloadAction<PollItem[]>) {
      return action.payload;
    },
    addPoll(state, action: PayloadAction<PollItem>) {
      return [...state, action.payload];
    },
  },
});

export const { setPolls, addPoll } = pollSlice.actions;
export default pollSlice;
