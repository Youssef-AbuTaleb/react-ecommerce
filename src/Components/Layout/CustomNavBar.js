import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import CartIcon from "./CartIcon";
import classes from "./CustomNavBar.module.css";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const CustomNavbar = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Navbar className={classes.nav} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img src={logo} alt="site logo" className={classes["nav-img"]} />
          React-Ecommrce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <button className={classes.button} onClick={props.onShow}>
              <span className={classes.icon}>
                <CartIcon />
              </span>
              <span>My Cart</span>
              <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
