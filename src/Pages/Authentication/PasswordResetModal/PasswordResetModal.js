import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import authImage from "../../../images/authentication.png";
import "../AuthModal.css";

const PasswordResetModal = ({
  setOpenSignInModal,
  setOpenResetModal,
  openResetModal,
}) => {
  const { error, user, resetPassword, setError } = useFirebase();

  const [resetEmail, setResetEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);

  /* modal functionalities */
  const handleClose = () => setOpenResetModal(false);
  const handleOpen = () => {
    handleClose();
    setOpenSignInModal(true);
  };

  const handleOnChange = (e) => {
    setError("");
    setSendEmail(false);
    setResetEmail(e.target.value);
  };

  // handle reset password

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(resetEmail);
    setSendEmail(true);
  };

  return (
    <>
      <Modal size="lg" centered show={openResetModal} onHide={handleClose}>
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
              Reset Password
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Row md={2} xs={1} className="modal-wrapper">
          <Col className="authentication-form-container">
            <h4 className="auth-form-title my-4 d-none d-md-block">
              Reset Password
            </h4>
            <Modal.Body className="p-0">
              <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={handleOnChange}
                    className="auth-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </Form.Group>

                {error ? (
                  <Alert variant="danger">{error}</Alert>
                ) : (
                  sendEmail && (
                    <Alert variant="info">
                      An password reset email has been sent
                    </Alert>
                  )
                )}

                {/* sign in btn */}
                <div className="auth-btn-wrapper">
                  <Button
                    className="w-100 rounded-pill auth-btn"
                    variant="primary"
                    type="submit"
                  >
                    Reset
                  </Button>
                  <p
                    onClick={handleOpen}
                    className="cursor-pointer text-decoration-underline d-block d-md-none"
                  >
                    or, Login
                  </p>
                </div>
              </Form>
            </Modal.Body>
          </Col>
          <Col className="d-none d-md-flex flex-column ">
            <div className="d-flex justify-content-end">
              <p className="auth-redirect-link">
                Don’t have an account yet?
                <span
                  onClick={handleOpen}
                  className="text-primary cursor-pointer ms-1"
                >
                  Create new for free!
                </span>
              </p>
            </div>
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

export default PasswordResetModal;
