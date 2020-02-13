import React,{useState}from "react";
import {Navbar,Nav} from "react-bootstrap";

function Navb(){
  const [show, setShow] = useState(false);
  return(
    <div>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Best Buy Online</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {!show && <Nav.Link href="/logIn" onClick={()=> setShow(true)}>Log In</Nav.Link>}
      {!show && <Nav.Link href="/signUp"onClick={()=> setShow(true)}>Sign up</Nav.Link>}
      {!show && <Nav.Link href="/Cart">Your Cart</Nav.Link>}
      {!show && <Nav.Link href="/"onClick={()=> setShow(false)}> Log out</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )

}
export default Navb