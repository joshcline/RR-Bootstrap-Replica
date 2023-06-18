import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import InstaCartLogo from './InstaCartLogo.jpg';

function NavBar () {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
          <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Finstacart-announces-plans-to-bring-on-300-000-new-personal-shoppers-over-the-next-3-months-301028409.html&psig=AOvVaw0EIGLNHpRArTMUQlGUQp08&ust=1687155481451000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjhiIuWzP8CFQAAAAAdAAAAABAJ" /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"> 
              </Nav>
              <Nav>
                <Nav.Link href="#LogIn">Log In</Nav.Link>
                <Button variant="success">Sign Up</Button>{' '}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;