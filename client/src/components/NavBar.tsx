import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary\" sticky="top">
                <Container>
                    <Navbar.Brand href="#">Andrew Zhang</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto justify-content-evenly" >
                            <Nav.Link className="p-5" href="#about">About</Nav.Link>
                            <Nav.Link className="p-5" href="#experience">Experience</Nav.Link>
                            <Nav.Link className="p-5" href="#projects">Projects</Nav.Link>
                            <Nav.Link className="p-5" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar;