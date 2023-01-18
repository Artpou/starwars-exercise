import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StarWarsData, Status } from '../../types';

interface DataState {
  data: StarWarsData | undefined;
  status: Status
  error: string | null;
}

const initialState: DataState = {
  data: undefined,
  status: 'loading',
  error: null,
};

export const DataSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.status = 'loading';
    },
    fetchDataSuccess: (state, action: PayloadAction<StarWarsData>) => {
      state.data = action.payload;
      state.status = 'idle';
      state.error = null;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = DataSlice.actions;

export default DataSlice.reducer;
