import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// SLICES
import { usersSlice } from "store/users/users.slice";
import { postsSlice } from "store/posts/posts.slice";

// PERSIST CONFIG
import { persistConfig } from "./persist-config";

const rootReducers = combineReducers({
  users: usersSlice.reducer,
  posts: postsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default persistReducer(persistConfig, rootReducers);
