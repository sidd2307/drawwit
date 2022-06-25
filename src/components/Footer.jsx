import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Navbar.Brand href="/">Drawwit by Sid</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Draw resizable shapes!</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link> */}
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
