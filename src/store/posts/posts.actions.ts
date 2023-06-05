// SLICES
import {
  getPostsStartReducer,
  getPostsSuccessReducer,
  getPostsFailedReducer,
  updatePostsListReducer,
} from "store/posts/posts.slice";
// STORE
import { AppThunk } from "store";
// API
import { postsApi } from "api";

// GET USER POSTS LIST
export const getUserPostsAsync = (userId: string): AppThunk => async dispatch => {
  try {
    dispatch(getPostsStartReducer());

    const resp = await postsApi.getUserPosts(userId);
    const posts = resp.data || [];

    dispatch(getPostsSuccessReducer({ postsList: posts || [] }));
  } catch (error: any) {
    dispatch(getPostsFailedReducer(error));
  }
};

// REMOVE A POST FROM THE LIST
export const removePost =
  (id: string, posts: any): AppThunk =>
    dispatch => {
      const updatedPosts = posts.filter((post: any) => post.id !== id);
      dispatch(updatePostsListReducer({ postsList: updatedPosts }));
    };

// SEARCH POST
export const searchPost =
  (text: string, countries: any): AppThunk =>
    dispatch => {
      const updatedPosts = countries.filter((post: any) => {
        return (
          post.title.toLowerCase().includes(text.toLowerCase()) 
        );
      });
      dispatch(updatePostsListReducer({ postsList: updatedPosts }));
    };

