import React from "react";
import { Button } from "react-bootstrap";
import "./Group.css";

const Group = ({ group }) => {
  return (
    <div className="d-flex justify-content-between group">
      <div className="d-flex align-items-center">
        <div className="group-img-wrapper">
          <img src={group.src} alt="" />
        </div>
        <p className="ms-1 m-0 group-name">{group.name}</p>
      </div>
      <div>
        <Button variant="light" className="rounded-pill group-btn">
          Follow
        </Button>
      </div>
    </div>
  );
};

export default Group;
