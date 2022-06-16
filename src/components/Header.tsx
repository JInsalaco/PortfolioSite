import { Navbar, Nav, Container } from "react-bootstrap";

export function Header() {
    return(
        <Navbar bg='black' className='site-navigation' expand="lg" variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-8 navigation-content">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact-info">Contact Info</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}