import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import facebook from "../../../images/facebook_logo.png";
import google from "../../../images/google_logo.png";
import "../AuthModal.css";
import PasswordResetModal from "../PasswordResetModal/PasswordResetModal";

const SignInModal = ({
  openSignInModal,
  setOpenSignInModal,
  setShowCreateAccountModal,
}) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const [loginData, setLoginData] = useState({});
  const [openResetModal, setOpenResetModal] = useState(false);

  /* modal functionalities */
  const handleClose = () => setOpenSignInModal(false);
  const handleOpen = () => {
    handleClose();
    setShowCreateAccountModal(true);
  };

  const handleOpenResetModal = () => {
    handleClose();
    setOpenResetModal(true);
  };

  // handle login

  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);
    fetch(
      `https://dry-reaches-58740.herokuapp.com/user/login?email=${loginData.email}&password=${loginData.password}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        data || setError(true);
        data.email && handleClose();
        localStorage.setItem("userId", JSON.stringify(data._id));
        window.location.reload();
      });
  };

  const handleLoginData = (e) => {
    setError(false);
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };
  return (
    <>
      <Modal size="lg" centered show={openSignInModal} onHide={handleClose}>
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
              Welcome back!
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Row md={2} xs={1} className="modal-wrapper">
          <Col className="authentication-form-container">
            <h4 className="auth-form-title my-4 d-none d-md-block">Sign In</h4>
            <Modal.Body className="p-0">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={handleLoginData}
                    className="auth-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <div className="passwordField">
                    <Form.Control
                      onChange={handleLoginData}
                      className="auth-field"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <FontAwesomeIcon className="passwordIcon" icon={faEye} />
                  </div>
                </Form.Group>
                {error && <Alert variant="danger">User not found</Alert>}

                {/* sign in btn */}
                <div className="auth-btn-wrapper">
                  <Button
                    className="w-100 rounded-pill auth-btn"
                    variant="primary"
                    type="submit"
                  >
                    Sign In
                  </Button>
                  <p
                    onClick={handleOpen}
                    className="cursor-pointer text-decoration-underline d-block d-md-none"
                  >
                    or, Create Account
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

              {/* forgot password */}
              <p
                onClick={handleOpenResetModal}
                className="forgot-password cursor-pointer"
              >
                Forgot Password
              </p>
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
      {/* password reset modal */}
      <PasswordResetModal
        setOpenSignInModal={setOpenSignInModal}
        setOpenResetModal={setOpenResetModal}
        openResetModal={openResetModal}
      />
    </>
  );
};

export default SignInModal;
