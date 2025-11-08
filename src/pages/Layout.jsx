import { Outlet, Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Container className="mt-3">
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
};

export default Layout;
