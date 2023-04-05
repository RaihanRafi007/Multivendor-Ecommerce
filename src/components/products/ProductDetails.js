import {
  faBagShopping,
  faCartPlus,
  faCircleMinus,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import logo from "../../logo.svg";
import Badge from "react-bootstrap/Badge";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CategoryProduct from "../category /CategoryProducts";
import SingleProduct from "../SingleProduct";

const ProductDetails = (props) => {
  const { id, title, detail, price, demo_url } = props.product;
  const [cartStatus, setCartStatus] = useState(false);

  // console.log('Product:', props.product);
  // console.log('ID:', id);

  const cartAddHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    const cartData = [
      {
        product: {
          id: id,
          title: title,
        },
        user: {
          id: 1,
        },
      },
    ];
    if (cartJson !== null) {
      cartJson.push(cartData);
      var cartString = JSON.stringify(cartJson);
      localStorage.setItem("cartData", cartString);
    } else {
      var newCartList = [];
      newCartList.push(cartData);
      var cartString = JSON.stringify(newCartList);
      localStorage.setItem("cartData", cartString);
    }

    setCartStatus(true);
  };

  const cartRemoveHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    cartJson.map((cart, index) => {
      if (cart !== null && cart.product.id === id) {
        delete cartJson[index];
      }
    });
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartData", cartString);
    setCartStatus(false);
  };

  return (
    <>
      <h3>{title}</h3>
      <p>{detail}</p>

      <h5 className="card-tile">Price: $ {price}</h5>
      <p>
        <a href={demo_url}>
          <Button
            as="Link"
            target={"_blank"}
            className="mb-1 me-2"
            title="Demo"
            variant="dark"
          >
            <FontAwesomeIcon icon={faEye} /> Demo
          </Button>
        </a>
        {!cartStatus && (
          <Button
            onClick={cartAddHandler}
            className="mb-1 me-2"
            title="Add to Cart"
            variant="info"
          >
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </Button>
        )}

        {cartStatus && (
          <Button
            onClick={cartRemoveHandler}
            className="mb-1 me-2"
            title="Remove from"
            variant="warning"
          >
            <FontAwesomeIcon icon={faCircleMinus} /> Remove from Cart
          </Button>
        )}

        <Button variant="success" className="mb-1 me-2 btn-" title="Buy Now">
          <FontAwesomeIcon icon={faBagShopping} /> Buy Now
        </Button>
        <Button variant="danger" title="Add to Wishlist">
          <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
        </Button>
      </p>
      <hr />
      <div className="producttags">
        <h5>Tags</h5>
        <p>{props.tagsLinks}</p>
      </div>
    </>
  );
};

export default ProductDetails;
