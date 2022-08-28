import React from "react";
import Reacticonsvg from "../images/React-icon.svg.png";
import { Navbar, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Reacticonsvg}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>React Todo List</Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">GitHub</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
