import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router';
import LanguageContext from "../context/language";
import {useEffect, useContext} from 'react';
function NavigationBar() {

    const {language, setLanguage } = useContext(LanguageContext);
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
              <Nav.Link as={NavLink} to="/Form">Form</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Language" id="language-dropdown" align="end">
                <NavDropdown.Item href="#/en" onClick={ () => setLanguage('en')}>English</NavDropdown.Item>
                <NavDropdown.Item href="#/ar" onClick={ () => setLanguage('ar')}>Arabic</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default NavigationBar;
