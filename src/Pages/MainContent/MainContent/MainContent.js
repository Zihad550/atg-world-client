import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Groups from "../Groups/Groups";
import MainContentHeader from "../MainContentHeader/MainContentHeader";
import Posts from "../Posts/Posts";

const MainContent = () => {
  return (
    <Container className="mb-5 p-0">
      <MainContentHeader />
      <Row>
        <Col xs={12} md={8}>
          <Posts />
        </Col>
        <Col className="d-none d-md-block" xs={12} md={4}>
          <Groups />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
