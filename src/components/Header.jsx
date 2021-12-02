import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img
              alt="Rick &  Morty"
              src="https://res.cloudinary.com/academia/image/upload/v1638249354/rick_and_morty_logo_abqgqc.png"
              width="150"
              height="60"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="me-auto">
          <Link className="nav-link" to="/"> Personajes</Link>
          <Link  className="nav-link" to="Episode"> Episodios</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
