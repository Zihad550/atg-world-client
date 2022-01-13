import {
  faExclamationCircle,
  faPen,
  faThumbsUp,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Group from "../Group/Group";
import "./Groups.css";

const Groups = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("./groups.json")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);
  return (
    <div>
      <Form className="d-flex align-items-center border-bottom-2 location-form">
        <FontAwesomeIcon
          className="me-2 my-auto d-block"
          icon={faUserFriends}
        />
        <input
          onBlur={() => setShowAlert(false)}
          onFocus={() => setShowAlert(true)}
          className="border-0"
        />
        <FontAwesomeIcon icon={faPen} />
      </Form>
      <Alert className="d-flex" show={showAlert} variant="light">
        <div>
          <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
        </div>{" "}
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </Alert>

      {/* groups */}
      {groups !== [] && (
        <>
          <h4 className="text-uppercase">
            <FontAwesomeIcon icon={faThumbsUp} /> Recommended Groups
          </h4>
          {groups.map((group) => (
            <Group group={group} key={group.id} />
          ))}
          <a href="#">See More...</a>
        </>
      )}
    </div>
  );
};

export default Groups;
