import React from "react";
// import {Search} from "@material-ui/icons"
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container >
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">

          <Form className="d-flex">
              <FormControl
              
                type="search"
                placeholder="Search for products, brands etc"
                className="me-2"
                aria-label="Search"
                
              />
              {/* <Search /> */}
              <Button variant="light" className="text-primary">Search</Button>
            </Form>

            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Saved Items</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Saved Items</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;

