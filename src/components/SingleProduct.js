import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

// Single Product

const SingleProduct = (props) => {
  const {id, title, price, image } = props.product;

  return (
    <>
    
      <Col>
        <Card>
          <Link to={`/product/${title}/${id}`}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title>
              <Link to={`/product/${title}/${id}`}>{title}</Link>
            </Card.Title>

            <Card.Title className="text-muted">Price:  $ {price}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button title="Add to Cart" className="btn-success btn-sm">
              <FontAwesomeIcon icon={faCartPlus} />{" "}
            </Button>
            <Button title="Add to Wishlist" className="btn-danger btn-sm ms-1">
              <FontAwesomeIcon icon={faHeart} />{" "}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleProduct;
