import React, { useContext, useState } from "react";
import Layout from "../hocs/layouts/Layout";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "./Context";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [cartStatus, setCartStatus] = useState(false);
  const [product, setProduct] = useState([]);

  if (cartData === null || cartData.length === 0) {
    var cartItems = 0;
  } else {
    var cartItems = cartData.length;
  }

  var sum = 0;
  cartData.map((item, index) => {
    sum += parseFloat(item.product.price);
  });

  const cartRemoveHandler = (product_id) => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    // console.log("cartJson before deleting: ", cartJson); // add this line to log the cartJson before deleting

    cartJson.map((cart, index) => {
      // console.log("cart:", cart);
      if (cart !== null && cart.product.id === product_id) {
        // delete cartJson[index];
        cartJson.splice(index, 1);
      }
    });
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartData", cartString);
    setCartStatus(false);
    setCartData(cartJson);
  };

  // console.log("cartData:", cartData);
  return (
    <Layout>
      <Container>
        {" "}
        <h4>All Items ({cartData ? cartData.length : 0}) </h4>
        {cartData.length ? (
          <>
            <Row>
              <Col>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {" "}
                            <Link to="#">
                              {" "}
                              <Image width={50} src={item.product.image} />{" "}
                            </Link>
                            <p>
                              <Link className="" to="#">
                                {item.product.title}
                              </Link>
                            </p>
                          </td>
                          <td>$ {item.product.price}</td>
                          <td>
                            <Button
                              onClick={() => cartRemoveHandler(item.product.id)}
                              className="mb-1 me-2"
                              title="Remove from"
                              variant="warning"
                            >
                              <FontAwesomeIcon icon={faCircleMinus} /> Remove
                              from Cart
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th >Total</th>
                      <th>$ {sum} </th>
                      <th></th>

                    </tr>
                    <tr>
                      <td colSpan="4" align="center">
                        <Button as={Link} to="/categories">
                          Continue Shopping
                        </Button>{" "}
                        <Button as={Link} to="confirm-order">
                          Proceed
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Link className="" to="/categories">
              <Button>Home</Button>
            </Link>
          </>
        )}
        {/* {cartItems === 0 && (
         
        )} */}
      </Container>
    </Layout>
  );
};

export default Checkout;
