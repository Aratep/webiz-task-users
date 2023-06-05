import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ROOT REDUCER
import { RootState } from "store/root-reducers";

// DEFINE SINGLE POST TYPE
export interface IPost {
    id: string;
    title: string;
    body: string;
}

// DEFINE USERS STATE
interface PostsState {
    postsList?: IPost[];
    updatedPosts?: IPost[];
    isLoading?: boolean;
    error?: string;
}

// INITIAL STATE
const initialState: PostsState = {
    isLoading: false,
    error: "",
    postsList: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsStartReducer: state => {
            state.isLoading = true;
        },
        getPostsSuccessReducer: (state, { payload }: PayloadAction<PostsState>) => {
            state.postsList = payload.postsList;
            state.updatedPosts = payload.postsList;
            state.isLoading = false;
        },
        getPostsFailedReducer: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.isLoading = false;
        },
        updatePostsListReducer: (state, { payload }: PayloadAction<PostsState>) => {
            state.updatedPosts = payload.postsList;
        },
    },
});

export const {
    getPostsStartReducer,
    getPostsSuccessReducer,
    getPostsFailedReducer,
    updatePostsListReducer,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;
