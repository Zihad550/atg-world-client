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
    <Card>
      {postImg && (
        <Card.Img className="img-fluid" variant="top" src={postImg} />
      )}
      <Card.Body>
        <h4>{tag}</h4>
        <div className="d-flex justify-content-between">
          <h2>{name}</h2>{" "}
          <FontAwesomeIcon className="fs-1 cursor-pointer" icon={faEllipsisH} />
        </div>
        {description && <Card.Text>{description}</Card.Text>}

        {destination && (
          <div>
            <div className="d-flex">
              {date ? (
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <p>{date}</p>
                </div>
              ) : (
                <div className="d-flex">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>{company}</p>
                </div>
              )}
              <div className="d-flex">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>{destination}</p>
              </div>
            </div>
            {date ? (
              <Button variant="outline-danger" className="w-100">
                Visit Website
              </Button>
            ) : (
              <Button variant="outline-success" className="w-100">
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
          <p>{admin}</p>
        </div>
        {/* views and share */}
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEye} />
            <p className="text-secondary">1.4k views</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Post;
