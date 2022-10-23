import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import authImage from "../../../images/authentication.png";
import "../AuthModal.css";
import ResetPassword from "../ResetPassword/ResetPassword";

const PasswordResetModal = ({
  setOpenSignInModal,
  setOpenResetModal,
  openResetModal,
}) => {
  const [openPasswordResetModal, setOpenPasswordResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [error, setError] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  /* modal functionalities */
  const handleClose = () => setOpenResetModal(false);
  const handleOpen = () => {
    handleClose();
    setOpenSignInModal(true);
  };

  const handleOpenResetPassword = () => {
    setOpenPasswordResetModal(true);
    handleClose();
  };

  const handleOnChange = (e) => {
    setError(false);
    setSendEmail(false);
    setResetEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/forgotPassword?resetEmail=${resetEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError(true);
        } else {
          // setSendEmail(true);
          setResetPassword(true);
          handleOpenResetPassword();
        }
      });
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

                {sendEmail && (
                  <Alert variant="info">
                    An password reset email has been sent
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger">User not found please register</Alert>
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

      <ResetPassword
        email={resetEmail}
        setOpenPasswordResetModal={setOpenPasswordResetModal}
        openPasswordResetModal={openPasswordResetModal}
      />
    </>
  );
};

export default PasswordResetModal;
