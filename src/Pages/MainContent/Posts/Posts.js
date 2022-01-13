import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Container>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default Posts;
