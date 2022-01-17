import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const WriteComment = ({ show, handleClose, setUpdated, post }) => {
  const [commentData, setCommentData] = useState({});
  // handle comment
  const handleWriteComment = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/posts/comment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount && setUpdated(true);
      });
  };

  const handleCommentData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...commentData };
    newData[field] = value;
    setCommentData(newData);
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
