import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

// Single Product

const CategoryProduct = (props) => {
  const title = props.title;
  return (
    <>
      <h3 className="mb-4 mt-4">{title}</h3>

      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Link to="/product/python/1">
                <Card.Img variant="top" src={logo} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link to="/product/python/1">Product Title</Link>
                </Card.Title>

                <Card.Title className="text-muted">Price: $500</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button title="Add to Cart" className="btn-success btn-sm">
                  <FontAwesomeIcon icon={faCartPlus} />{" "}
                </Button>
                <Button
                  title="Add to Wishlist"
                  className="btn-danger btn-sm ms-1"
                >
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryProduct;
