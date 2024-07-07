import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/homepage-components/FormLogin";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  // Back to Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };


  return (
    <Container className="py-2 home-bg" fluid>
      <Button className="px-3 py-2 mt-3 mb-5 back-btn" onClick={backToHome}>
        Back to Home
      </Button>
      <Row className="d-flex justify-content-center">
        <Col>
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
}