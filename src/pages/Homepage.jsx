import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
    window.scrollTo(0, 0);
  };

  const onClickRegister = () => {
    navigate("/register");
    window.scrollTo(0, 0);
  };


  return (
    <Container id="home" className="home-bg" fluid>
      <Row>
        <button className="home-btn col-12 btn-mt" onClick={onClickLogin}>Login</button>
        <button className="home-btn col-12" onClick={onClickRegister}>Register</button>
      </Row>
    </Container>
  );
}
