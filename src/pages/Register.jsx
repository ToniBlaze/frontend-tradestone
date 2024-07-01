import React from "react";
// import RegisterForm from "../components/RegisterForm";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // Back to Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Container className="my-2 ">
      <Button className="px-3 py-2 mt-3 mb-5 btn-back" onClick={backToHome}>
        Back to Home
      </Button>
      <Row className="d-flex justify-content-center">
      <Col xs={11} sm={8} md={6} lg={5}>
        {/* <RegisterForm /> */}
        <h1>REGISTER PAGE</h1>
      </Col>
    </Row>
    </Container>
  );
}