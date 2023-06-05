import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ROOT REDUCER
import { RootState } from "store/root-reducers";

// DEFINE SINGLE USER TYPE
export interface IUser {
  name: string;
  email: string;
  address: string;
}

// DEFINE USERS STATE
interface UsersState {
  usersList?: IUser[];
  isLoading?: boolean;
  error?: string;
}

// INITIAL STATE
const initialState: UsersState = {
  isLoading: false,
  error: "",
  usersList: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStartReducer: state => {
      state.isLoading = true;
    },
    getUsersSuccessReducer: (state, { payload }: PayloadAction<UsersState>) => {
      state.usersList = payload.usersList;
      state.isLoading = false;
    },
    getUsersFailedReducer: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    }
  },
});

export const {
  getUsersStartReducer,
  getUsersSuccessReducer,
  getUsersFailedReducer,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;
