import React from "react";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout/MainLayout";

export default function Homepage() {
  return (
    <MainLayout>
      <Container id="home" fluid>
        <Row>
            <h1> HOME PAGE </h1>
        </Row>
      </Container>
    </MainLayout>
  );
}