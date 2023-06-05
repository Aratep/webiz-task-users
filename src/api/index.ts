import axios from "axios";

export const usersApi = {
  // GET USERS LIST
  getUsersList: () => axios.get("https://jsonplaceholder.typicode.com/users"),
};

export const postsApi = {
    // GET USERS LIST
    getUserPosts: (userId: string) => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
  };