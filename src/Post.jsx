import React from "react";

const Post = ({ posts, loading }) => {
  console.log(posts);
  const possts =
    posts.length === 0 ? (
      <h3>Loading...</h3>
    ) : (
      <div>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                padding: "20px",
                margin: "10px 0",
                border: "1px solid #000",
              }}
            >
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );

  return <div>{possts}</div>;
};
export default Post;
