import { Clear } from "@mui/icons-material";

type PostProps = {
    post: any;
    removePost?: any
};

function PostItem({ post, removePost }: PostProps) {
    return <div className="post-item">
        <div className="post-item__header">
            <div className="post-item__header-title"><h3>{post.title}</h3></div>
            <div className="post-item__header-remove_icon">
                <Clear onClick={removePost} />
            </div>
        </div>
        <div className="post-item__body">{post.body}</div>
    </div>
}

export default PostItem