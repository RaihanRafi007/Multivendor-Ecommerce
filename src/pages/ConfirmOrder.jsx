import {
  faGgCircle,
  faCheck,
  faStumbleuponCircle,
  faConfluence,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../hocs/layouts/Layout";
import { CartContext, UserContext } from "./Context";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const baseUrl = "http://127.0.0.1:8000/api/";

const ConfirmOrder = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [payMethod, setPayMethod] = useState("");

  const userContext = useContext(UserContext);
  // console.log(userContext);

  if (userContext.login === null) {
    window.location.href = "/customer/login";
  } else {
    if (confirmOrder === false) {
      addOrderInTable();
    }
  }

  // function addOrderInTable() {
  //   const userContext = useContext(UserContext);
  //   console.log(userContext);

  //   if (userContext.login === null) {
  //     window.location.href = "/customer/login";
  //   } else {
  //     const formData = new FormData();
  //     formData.append("customer", userContext.customer_id);

  //     //  Submit Data
  //     axios
  //       .post(baseUrl + "orders/", formData)
  //       .then(function (response) {
  //         console.log(response.data);
  //         // var orderId = response.data.id;
  //         // Order_Items(orderId);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }

  function addOrderInTable() {
    const customerId = localStorage.getItem("customer_id");
    // console.log(customerId);
    const formData = new FormData();
    formData.append("customer", customerId);

    //  Submit Data
    axios
      .post(baseUrl + "orders/", formData)
      .then(function (response) {
        // console.log(response.data);
        var orderId = response.data.id;
        setOrderId(orderId);
        OrderItems(orderId);
        setConfirmOrder(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateOrderStatus( order_status) {
    //  Submit Data
    axios
      .post(baseUrl + "update-order-status/", orderId)
      .then(function (response) {
        console.log(response);
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function OrderItems(orderId) {
    // console.log(orderId);
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);

    if (cartJson !== null) {
      cartJson.map((cart, index) => {
        const formData = new FormData();
        formData.append("order", orderId);
        formData.append("product", cart.product.id);
        formData.append("qty", 1);
        formData.append("price", cart.product.price);
        //  Submit Data
        axios
          .post(baseUrl + "orderitems/", formData)
          .then(function (response) {
            // Remove Cart Items from local storage
            cartJson.splice(index, 1);
            localStorage.setItem("cartData", JSON.stringify(cartJson));
            setCartData(cartJson);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
    // var previousCartUpdated = localStorage.getItem("cartData");
    // var cartJsonUpdated = JSON.parse(previousCartUpdated);
    // setCartData(cartJsonUpdated);
  }
  
  function changePaymentMethod(payMethod) {
    setPayMethod(payMethod);
  }
  // console.log(payMethod);
  function PayNowButton(params) {
    if (payMethod !== "") {
      changePaymentMethod(payMethod);
    } else {
      alert("Select Payment Method!");
    }
  }

  console.log(PayNowButton);
  return (
    <Layout>
      <Container>
        <>
          <Row className="d-flex, justify-content-center">
            <Col sm={6}>
              <Card className="text-center mt-1">
                <h3> Your order has been confirmed!</h3>
                <h5>ORDER ID: {orderId}</h5>
              </Card>
              <Card className=" p-3 mt-2">
                <Form>
                  <Form.Check
                    onChange={() => changePaymentMethod("paypal")}
                    type="radio"
                    id="custom-switch"
                    label="Paypal"
                    name="payMethod"
                  />
                  <Form.Check
                    onChange={() => changePaymentMethod("stripe")}
                    type="radio"
                    id="custom-switch"
                    label="Stripe"
                    name="payMethod"
                  />
                  <Form.Check
                    onChange={() => changePaymentMethod("razorpay")}
                    type="radio"
                    id="custom-switch"
                    label="RazorPay"
                    name="payMethod"
                  />
                  <Button
                    onClick={PayNowButton}
                    variant="success"
                    className="mt-2"
                  >
                    Next
                  </Button>
                </Form>
              </Card>

              {payMethod === "paypal" && (
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AU6xuiBCYfMlzLnpd8mPfM-DXFeLxkL3Qc6q3D7GDx1DZZSRO_0ST2NeBxxigW4c6XOYJBMchzQadRdI",
                  }}
                >
                  <PayPalButtons className="mt-3"
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: 'USD',
                              value: "3",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    //  setOrderStatus(true)
                     updateOrderStatus(true)
                      });
                    }}
                  />
                </PayPalScriptProvider>
              )}
            </Col>
          </Row>
        </>
      </Container>
    </Layout>
  );
};

export default ConfirmOrder;
