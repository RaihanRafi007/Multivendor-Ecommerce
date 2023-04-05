import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CartContext, UserContext } from "../../pages/Context";

const NavBar = (props) => {
  const userContext = useContext(UserContext);
  // console.log( userContext.login);
  const { cartData, setCartData } = useContext(CartContext);
  // console.log("cartData:", cartData);

  // if (cartData === null) {
  //   var cartItems = 0;
  // } else {
  //   var cartItems = cartData.length;
  // }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Python Market Place
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              {userContext.login !== 'true' ? (
                <>
                  <NavDropdown.Item as={Link} to="/customer/register">
                    Register
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/customer/login">
                    Login
                  </NavDropdown.Item>
                </>
              ) : 
              <>
              {/* <NavDropdown.Divider /> */}

              <NavDropdown.Item as={Link} to="/customer/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer/logout">
                Logout
              </NavDropdown.Item>
            </>
              }

              
            </NavDropdown>
            {/* Vendor panel */}
            <NavDropdown title="Vendor Panel" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/seller/register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seller/login">
                Login
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/seller/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seller/login">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/checkout">
              New Orders (4)
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout">
              My Cart ({cartData ? cartData.length : 0})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
