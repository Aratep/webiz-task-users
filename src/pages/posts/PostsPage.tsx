import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import { TextField } from "@mui/material";

// COMPONENTS
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import PostItem from "./post-item/PostItem";
// SLICES
import { selectPosts } from "store/posts/posts.slice";
// ACTIONS
import {
    getUserPostsAsync,
    removePost,
    searchPost
} from "store/posts/posts.actions";
// STORE
import { useAppDispatch } from "store";

function PostsPage() {
    const [searchText, setSearchText]  =useState("")
    const dispatch = useAppDispatch();
    const postsStore = useSelector(selectPosts);
    let { userId, userName } = useParams();

    const { updatedPosts, postsList, isLoading } = postsStore;


    useEffect(() => {
        dispatch(getUserPostsAsync(userId || "1"))
        // eslint-disable-next-line
    }, [])

    function onRemoveClick(postId: string) {
        dispatch(removePost(postId, updatedPosts))
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
        dispatch(searchPost(e.target.value, postsList));
    }

    return (
        <div className="posts-page">
            <Link to="/">Back to Users</Link>
            <div className="posts-page__content">
                <TextField
                    label="Search"
                    variant="outlined"
                    placeholder={"Search"}
                    value={searchText}
                    onChange={onInputChange}
                />
                <LoaderWrapper isLoading={isLoading || false}>
                    <h1>{userName}'s posts</h1>
                    {updatedPosts?.map((post) => {
                        return <PostItem removePost={() => onRemoveClick(post.id)} post={post} key={post.id} />
                    })}
                </LoaderWrapper>
            </div>
        </div>
    )
}

export default PostsPage