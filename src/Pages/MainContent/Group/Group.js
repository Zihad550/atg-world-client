import React from "react";
import { Button } from "react-bootstrap";

const Group = ({ group }) => {
  console.log(group);
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <div>
          <img src={group.src} alt="" />
        </div>
        <p className="ms-1 m-0">{group.name}</p>
      </div>
      <div>
        <Button variant="light" className="rounded-pill">
          Follow
        </Button>
      </div>
    </div>
  );
};

export default Group;
