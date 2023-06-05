// SLICES
import {
  getUsersStartReducer,
  getUsersSuccessReducer,
  getUsersFailedReducer,
} from "store/users/users.slice";
// STORE
import { AppThunk } from "store";
// API
import { usersApi } from "api";

// GET USERS LIST
export const getUsersListAsync = (): AppThunk => async dispatch => {
  try {
    dispatch(getUsersStartReducer());

    const resp = await usersApi.getUsersList();
    const users = resp.data || [];

    dispatch(getUsersSuccessReducer({ usersList: users || [] }));
  } catch (error: any) {
    dispatch(getUsersFailedReducer(error));
  }
};

