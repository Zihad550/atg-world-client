import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";

const CreatePost = ({ show, handleClose }) => {
  const [postData, setPostData] = useState({});
  console.log(postData);

  const { user } = useFirebase();

  const handlePostData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...postData };
    newData[field] = value;
    setPostData(newData);
  };

  // send to the server
  const handleSavePost = (e) => {
    e.preventDefault();
    fetch("https://dry-reaches-58740.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...postData,
        admin: user.displayName,
        adminImg: user.photoURL,
        likesCount: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.insertedId && alert("Post added successfully");
        handleClose();
        window.location.reload();
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSavePost}>
          <Form.Group className="mb-3">
            <Form.Control
              onBlur={handlePostData}
              type="text"
              placeholder="Post Title"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Select a Category</Form.Label>
            <Form.Select onChange={handlePostData} name="category" required>
              <option>Article</option>
              <option>Education</option>
              <option>Event</option>
              <option>Job</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={postData.category}
              onChange={handlePostData}
              type="text"
              placeholder="Tag"
              name="tag"
              required
            />
          </Form.Group>

          {postData.category === "Job" || (
            <Form.Group className="mb-3">
              <Form.Control
                onBlur={handlePostData}
                type="text"
                placeholder="Post Image Url"
                name="postImg"
                required
              />
            </Form.Group>
          )}

          {postData.category === "Event" && (
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                onChange={handlePostData}
                type="date"
                name="date"
                required
              />
              <Form.Control
                onChange={handlePostData}
                className="ms-1"
                type="text"
                placeholder="Destination"
                name="destination"
                required
              />
            </Form.Group>
          )}

          {postData.category === "Job" && (
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                onChange={handlePostData}
                type="text"
                name="company"
                placeholder="Company"
                required
              />
              <Form.Control
                onChange={handlePostData}
                className="ms-1"
                type="text"
                placeholder="Destination"
                name="destination"
                required
              />
            </Form.Group>
          )}

          {postData.category === "Education" && (
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onBlur={handlePostData}
                name="description"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
          )}
          {postData.category === "Article" && (
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onBlur={handlePostData}
                name="description"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
          )}
          <Button type="submit">Create Post</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePost;
