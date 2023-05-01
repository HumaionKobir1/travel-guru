import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Offcanvas } from "react-bootstrap";


const Header = () => {
    return (
        <>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand className='text-white' href="#">Travel Guru</Navbar.Brand>
            <Navbar.Toggle className='bg-white' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            className='bg-black'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className='bg-white' closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex text-white border rounded text-white">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="input-op text-black"
                    aria-label="Search"
                  />
                </Form>
                  <div className='d-md-flex gap-5 ms-5'>
                    <Nav.Link className='text-white' href="#action1">News</Nav.Link>
                    <Nav.Link className='text-white' href="#action2">Destination</Nav.Link>
                    <Nav.Link className='text-white' href="#action2">Blog</Nav.Link>
                    <Nav.Link className='text-white' href="#action2">Contact</Nav.Link>
                    <Button variant="warning">Login</Button>
                  </div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
};

export default Header;