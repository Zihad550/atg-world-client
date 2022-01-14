import {
  faBriefcase,
  faCalendarDay,
  faEllipsisH,
  faEye,
  faMapMarkerAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Post.css";

const Post = ({ post }) => {
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
  } = post;
  console.log(description);
  return (
    <Card className="mb-3">
      {postImg && (
        <Card.Img className="img-fluid" variant="top" src={postImg} />
      )}
      <Card.Body>
        {/* post tag */}
        <h4 className="post-tag">{tag}</h4>
        {/* post name */}
        <div className="d-flex justify-content-between">
          <h2 className="post-name">{name}</h2>

          <FontAwesomeIcon className="fs-3 cursor-pointer" icon={faEllipsisH} />
        </div>
        {/* post description */}
        {description && (
          <Card.Text className="post-description">{description}</Card.Text>
        )}

        {destination && (
          <div className="">
            <div className="d-flex mb-3">
              {date ? (
                <div className="d-flex align-items-center me-5">
                  <FontAwesomeIcon className="me-2" icon={faCalendarDay} />
                  <p>{date}</p>
                </div>
              ) : (
                <div className="d-flex align-items-center me-5">
                  <FontAwesomeIcon className="me-2" icon={faBriefcase} />
                  <p>{company}</p>
                </div>
              )}
              <div className="d-flex align-items-center">
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
      <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
        {/* admin */}
        <div className="d-flex align-items-center">
          <img src={adminImg} alt="admin" />
          <p className="admin-name">{admin}</p>
        </div>
        {/* views and share */}
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEye} />
            <p className="text-secondary mb-0 ms-2">1.4k views</p>
          </div>
          <div className="share-icon-wrapper cursor-pointer">
            <FontAwesomeIcon className="share-icon" icon={faShareAlt} />
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Post;
