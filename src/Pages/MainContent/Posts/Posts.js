import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setUpdated(false);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [updated]);
  return (
    <Container className="posts-container container-sm p-0">
      {posts.map((post) => (
        <Post post={post} key={post._id} setUpdated={setUpdated} />
      ))}
    </Container>
  );
};

export default Posts;
