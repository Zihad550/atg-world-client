import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";

const WriteComment = ({ show, handleClose, setUpdated, post }) => {
  const [commentData, setCommentData] = useState({});
  const { user } = useFirebase();
  // handle comment
  const handleWriteComment = (e) => {
    const newPost = {
      ...post,
      comment: commentData,
      userEmail: user.email,
      userName: user.displayName,
    };
    e.preventDefault();
    fetch("https://dry-reaches-58740.herokuapp.com/posts/comment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount && setUpdated(true);
        console.log(data);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Write your comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleWriteComment}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={(e) => setCommentData(e.target.value)}
              placeholder="comment"
              as="textarea"
              rows={3}
              required
              name="comment"
            />
          </Form.Group>
        </Form>
        <Button onClick={handleWriteComment} variant="info">
          Give Comment
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default WriteComment;
