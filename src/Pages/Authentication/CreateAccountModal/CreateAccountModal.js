import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import facebook from "../../../images/facebook_logo.png";
import google from "../../../images/google_logo.png";
import "../AuthModal.css";
import SignInModal from "../SignInModal/SignInModal";

const CreateAccountModal = ({
  showCreateAccountModal,
  setShowCreateAccountModal,
}) => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const handleClose = () => setShowCreateAccountModal(false);
  const handleOpenSignInModal = () => {
    handleClose();
    setOpenSignInModal(true);
  };
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showCreateAccountModal}
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
            <h4 className="authentication-title  my-4 d-block d-md-none">
              Create Account
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Row className="modal-wrapper" xs={1} md={2}>
          <Col className="authentication-form-container">
            <h4 className="auth-form-title my-4 d-none d-md-block">
              Create Account
            </h4>
            <Modal.Body className="p-0">
              <Form>
                <Form.Group className="d-flex">
                  <Form.Control
                    className="auth-field"
                    type="text"
                    placeholder="First Name"
                  />
                  <Form.Control
                    className="auth-field"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>

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
                  <Form.Control
                    className="auth-field"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                {/* create account btn */}

                <div className="auth-btn-wrapper">
                  <Button
                    className="w-100 rounded-pill auth-btn"
                    variant="primary"
                    type="submit"
                  >
                    Create Account
                  </Button>
                  <p
                    onClick={handleOpenSignInModal}
                    className="cursor-pointer text-decoration-underline d-block d-md-none"
                  >
                    or, Sign In
                  </p>
                </div>
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
            </Modal.Body>
          </Col>
          <Col className="d-flex flex-column">
            <div className="d-flex justify-content-end">
              <p className="auth-redirect-link d-none d-md-block">
                Already have an account?{" "}
                <span
                  onClick={handleOpenSignInModal}
                  className="text-primary cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </div>
            <div className="ms-auto my-auto d-none d-md-block">
              <img
                className="img-fluid d-inline-block"
                src={authImage}
                alt=""
              />
            </div>
            <div>
              <p className="auth-message ">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </Col>
        </Row>
      </Modal>

      <SignInModal
        openSignInModal={openSignInModal}
        setOpenSignInModal={setOpenSignInModal}
        setShowCreateAccountModal={setShowCreateAccountModal}
      />
    </>
  );
};

export default CreateAccountModal;
