import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </>
  );
};

export default Posts;
