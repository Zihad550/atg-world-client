import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import "../AuthModal.css";

const ResetPassword = ({
  setOpenPasswordResetModal,
  openPasswordResetModal,
  email,
}) => {
  const [password, setPassword] = useState("");

  /* modal functionalities */
  const handleClose = () => setOpenPasswordResetModal(false);

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  // handle reset password
  console.log(password);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const user = { email, password };
    fetch(`https://dry-reaches-58740.herokuapp.com/resetPassword`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount && alert("Password reseted successfully");
        window.location.reload();
      });
  };

  return (
    <>
      {}
      <Modal
        size="lg"
        centered
        show={openPasswordResetModal}
        onHide={handleClose}
      >
        <Modal.Header
          className=" authentication-header  text-center"
          closeButton
        >
          <Modal.Title>
            <p
              className="d-none d-md-block text-center authentication-title 
           "
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <h4 className="authentication-title d-block d-md-none my-4">
              Type new password
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Row md={2} xs={1} className="modal-wrapper">
          <Col className="authentication-form-container">
            <h4 className="auth-form-title my-4 d-none d-md-block">
              Type new password
            </h4>
            <Modal.Body className="p-0">
              <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={handleOnChange}
                    className="auth-field"
                    type="password"
                    placeholder="Enter new password"
                    name="password"
                    required
                  />
                </Form.Group>

                {/* sign in btn */}
                <div className="auth-btn-wrapper">
                  <Button
                    className="w-100 rounded-pill auth-btn"
                    variant="primary"
                    type="submit"
                  >
                    Reset
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Col>
          <Col className="d-none d-md-flex flex-column ">
            <div className="ms-auto my-auto">
              <img
                className="img-fluid d-inline-block"
                src={authImage}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ResetPassword;
