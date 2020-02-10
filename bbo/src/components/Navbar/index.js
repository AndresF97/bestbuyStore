import React from "react";
import {Navbar,Nav} from "react-bootstrap"

function onlyNav(){
    return(
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Best Buy Online</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Cart</Nav.Link>
      <Nav.Link href="#log">Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}
export default onlyNav