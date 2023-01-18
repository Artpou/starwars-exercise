import { configureStore } from '@reduxjs/toolkit'
import listReducer from '../components/List/ListSlice';
import dataReducer from '../components/Data/DataSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    data: dataReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch