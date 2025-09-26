import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    let cartP=useSelector((state)=>state.cart)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Redux</Navbar.Brand>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/" as={Link} href="#action1">Products</Nav.Link>
                        </Nav>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className='justify-content-end'>
                            <Navbar.Text>
                            <Nav.Link to="/cart" as={Link} href="#action1">My Bag<sup>{cartP.length}</sup></Nav.Link>

                            </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1