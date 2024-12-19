import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
function Menu() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as ={Link} to="/">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as ={Link} to="/">Home</Nav.Link>
                        <Nav.Link as ={Link} to="/categories">Categorie</Nav.Link>
                        <Nav.Link as ={Link} to="/scategories">Sous-Categorie</Nav.Link>
                        <Nav.Link as ={Link} to="/articles">Articles</Nav.Link>
                        <Nav.Link as ={Link} to="/articles/page/:pageNumber">Articles By Page</Nav.Link>
                        <NavDropdown title="Help" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Customer Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                History
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Setting
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;