import {
  faBriefcase,
  faCalendarDay,
  faCommentDots,
  faEllipsisH,
  faEye,
  faMapMarkerAlt,
  faShareAlt,
  faThumbsUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
  useAccordionButton,
} from "react-bootstrap";
import WriteComment from "../WriteComment/WriteComment";
import "./Post.css";

const Post = ({ post, setUpdated }) => {
  const {
    name,
    tag,
    description,
    admin,
    adminImg,
    postImg,
    date,
    destination,
    company,
    _id,
    likesCount,
    comments,
  } = post;

  // write comment modal functionalities
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  /* post like, comment, delete function */
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button className="border-0" type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  /* delete tooltip */
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Post
    </Tooltip>
  );

  // handle delete
  const handleDeletePost = (id) => {
    window.confirm("Are you sure") &&
      fetch(`http://localhost:8000/posts?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.deletedCount > 0 && alert("Successfully deleted");
          setUpdated(true);
        });
  };

  /* handle like */
  const handleLike = () => {
    fetch("http://localhost:8000/posts/like", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        data.modifiedCount && setUpdated(true);
        console.log(data);
      });
  };

  return (
    <>
      <Card className="mb-3">
        {postImg && (
          <Card.Img className="img-fluid" variant="top" src={postImg} />
        )}
        <Card.Body className="">
          {/* post tag */}
          <h4 className="post-tag">{tag}</h4>
          {/* post name */}
          <div className="d-flex justify-content-between">
            <h2 className="post-name">{name}</h2>

            <Accordion>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">
                    <FontAwesomeIcon
                      className="fs-3 cursor-pointer"
                      icon={faEllipsisH}
                    />
                  </CustomToggle>
                </Card.Header>

                {/* post options */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="d-flex">
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        onClick={() => handleDeletePost(_id)}
                        variant="danger rounded-pill"
                      >
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          icon={faTimes}
                        />
                      </Button>
                    </OverlayTrigger>

                    <Button
                      onClick={handleLike}
                      className="ms-1 rounded-circle"
                    >
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                    <Button
                      onClick={handleOpen}
                      className="ms-1 rounded-circle"
                    >
                      <FontAwesomeIcon icon={faCommentDots} />
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          {/* post description */}
          {description && (
            <Card.Text className="post-description">{description}</Card.Text>
          )}

          {destination && (
            <div className="">
              <div className="d-flex mb-3">
                {date ? (
                  <div className="d-flex align-items-center me-5 common-icon-wrapper">
                    <FontAwesomeIcon className="me-2" icon={faCalendarDay} />
                    <p>{date}</p>
                  </div>
                ) : (
                  <div className="d-flex align-items-center me-1 me-sm-5 common-icon-wrapper">
                    <FontAwesomeIcon className="me-2" icon={faBriefcase} />
                    <p>{company}</p>
                  </div>
                )}
                <div className="d-flex align-items-center common-icon-wrapper">
                  <FontAwesomeIcon
                    className="location-icon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <p>{destination}</p>
                </div>
              </div>
              {date ? (
                <Button
                  variant="outline-danger"
                  className="w-100 event-btn post-common-btn"
                >
                  Visit Website
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  className="w-100 apply-btn post-common-btn"
                >
                  Apply on Timesjobs
                </Button>
              )}
            </div>
          )}
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 d-flex justify-content-between mb-3">
          {/* admin */}
          <div className="d-flex align-items-center">
            <img src={adminImg} alt="admin" />
            <div className="admin-info">
              <p className="admin-name">{admin}</p>
              <p className="text-secondary mb-0 ms-2 d-block d-sm-none">
                1.4k views
              </p>
            </div>
          </div>
          {/* views and share */}
          <div className="d-flex align-items-center">
            <div className="align-items-center d-none d-md-flex">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-secondary mb-0 ms-2">1.4k views</p>
            </div>

            {/* likes */}
            <div className="align-items-center d-none d-md-flex mx-3">
              <FontAwesomeIcon icon={faThumbsUp} />
              <p className="text-secondary mb-0 ms-2">{likesCount}</p>
            </div>

            {/* comments */}
            <div className="align-items-center d-none d-md-flex mx-3">
              <FontAwesomeIcon icon={faCommentDots} />
              <p></p>
            </div>

            <div className="share-icon-wrapper cursor-pointer d-flex d-sm-block align-items-center ">
              <FontAwesomeIcon className="share-icon" icon={faShareAlt} />
              <p className="d-block d-sm-none">Share</p>
            </div>
          </div>
        </Card.Footer>
      </Card>
      {/* comment modal */}
      <WriteComment
        show={show}
        handleClose={handleClose}
        setUpdated={setUpdated}
        post={post}
      />
    </>
  );
};

export default Post;
