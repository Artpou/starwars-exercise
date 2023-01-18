import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StarWarsData, Status } from '../../types';

interface ListState {
  data: StarWarsData[];
  status: Status;
  error: string | null;
}

const initialState: ListState = {
  data: [],
  status: 'idle',
  error: null,
};

export const listSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    fetchListStart: (state) => {
      state.status = 'loading';
    },
    fetchListSuccess: (state, action: PayloadAction<StarWarsData[]>) => {
      state.data = action.payload;
      state.status = 'idle';
      state.error = null;
    },
    fetchListFailure: (state, action: PayloadAction<string>) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const { fetchListStart, fetchListSuccess, fetchListFailure } = listSlice.actions;

export default listSlice.reducer;
