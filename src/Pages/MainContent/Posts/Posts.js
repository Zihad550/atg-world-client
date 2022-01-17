import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setUpdated(false);
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [updated]);
  return (
    <Container className="posts-container container-sm p-0">
      {posts.map((post) => (
        <Post post={post} key={post.id} setUpdated={setUpdated} />
      ))}
    </Container>
  );
};

export default Posts;
