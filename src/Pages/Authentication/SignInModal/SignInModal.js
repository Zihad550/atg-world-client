import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import facebook from "../../../images/facebook_logo.png";
import google from "../../../images/google_logo.png";
import "../AuthModal.css";

const SignInModal = ({
  openSignInModal,
  setOpenSignInModal,
  setShowCreateAccountModal,
}) => {
  const handleClose = () => setOpenSignInModal(false);
  const handleOpen = () => {
    handleClose();
    setShowCreateAccountModal(true);
  };
  return (
    <>
      <Modal size="lg" centered show={openSignInModal} onHide={handleClose}>
        <Modal.Header
          className=" authentication-header bg-success bg-opacity-25 text-center"
          closeButton
        >
          <Modal.Title
            className=" text-center authentication-title 
          "
          >
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </Modal.Title>
        </Modal.Header>
        <Row className="modal-wrapper">
          <Col className="authentication-form-container">
            <h4 className="auth-form-title my-4">Sign In</h4>
            <Modal.Body className="p-0">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    className="auth-field"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="passwordField">
                    <Form.Control
                      className="auth-field"
                      type="password"
                      placeholder="Password"
                    />
                    <FontAwesomeIcon className="passwordIcon" icon={faEye} />
                  </div>
                </Form.Group>

                <Button
                  className="w-100 rounded-pill auth-btn signin-btn"
                  variant="primary"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>

              {/* brand authentications */}
              <div className="d-flex flex-column">
                <Button className="brand-signin-btn" variant="light">
                  <img src={facebook} alt="" />
                  Sign up with Facebook
                </Button>
                <Button className="brand-signin-btn" variant="light">
                  <img src={google} alt="" />
                  Sign up with Google
                </Button>
              </div>

              <p className="forgot-password">Forgot Password</p>
            </Modal.Body>
          </Col>
          <Col className="d-flex flex-column">
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

export default SignInModal;
