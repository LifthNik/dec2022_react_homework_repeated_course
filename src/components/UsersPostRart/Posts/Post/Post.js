import './Post.css'

export default function Post({ post }) {
    return (
        <div className="Post">
            {post ? (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>Loading post...</p>
            )}
        </div>
    );
}