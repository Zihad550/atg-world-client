import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Container className="posts-container container-sm p-0">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default Posts;
