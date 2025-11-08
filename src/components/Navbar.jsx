import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../gallary/logo3.png';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate=useNavigate()
  return (
    <Navbar className="nav-bg-color text-white navbar-custom" expand="lg" variant='dark'>
      <Container style={{width:"80%"}} >
        <Navbar.Brand href="/" >
            <img src={logo} style={{height:"60px"}} alt="webinor" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="service">Services</Nav.Link>              
<Nav.Link href="/about">About Us</Nav.Link> 
<Nav.Link href="/contact">Contact Us</Nav.Link> 
<button className='custom-btn' onClick={()=>navigate("/get-start")}>Get Started Now</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;