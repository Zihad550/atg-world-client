import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import facebook from "../../../images/facebook_logo.png";
import google from "../../../images/google_logo.png";
import "../AuthModal.css";
import SignInModal from "../SignInModal/SignInModal";

const CreateAccountModal = ({
  showCreateAccountModal,
  setShowCreateAccountModal,
}) => {
  const [registerData, setRegisterData] = useState({});
  const [matched, setMatched] = useState(false);

  /* modal functionalities */
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const handleClose = () => setShowCreateAccountModal(false);
  const handleOpenSignInModal = () => {
    handleClose();
    setOpenSignInModal(true);
  };

  /* handle register data */
  const handleRegister = (e) => {
    console.log("insides");
    setMatched(false);
    e.preventDefault();
    console.log(registerData);
    if (registerData.password !== registerData.confirmPassword) {
      return setMatched(true);
    } else {
      fetch("https://dry-reaches-58740.herokuapp.com/user/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registerData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("userId", JSON.stringify(data.insertedId));
          data.insertedId && alert("Successfully registered");
          handleClose();
        });
    }
  };

  const handleFieldData = (e) => {
    setMatched(false);
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...registerData };
    newValue[field] = value;
    setRegisterData(newValue);
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
              <Form onSubmit={handleRegister}>
                <Form.Group className="d-flex">
                  <Form.Control
                    onChange={handleFieldData}
                    className="auth-field"
                    type="text"
                    placeholder="First Name"
                    name="name"
                    required
                  />
                  <Form.Control
                    className="auth-field"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    onChange={handleFieldData}
                    className="auth-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="passwordField">
                    <Form.Control
                      onChange={handleFieldData}
                      className="auth-field"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <FontAwesomeIcon className="passwordIcon" icon={faEye} />
                  </div>
                  <Form.Control
                    onChange={handleFieldData}
                    className="auth-field"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  />
                </Form.Group>

                {matched && (
                  <Alert variant="danger">Password does not matches</Alert>
                )}

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
