import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = (props) => {
  const {title, id} = props.category;

  return (
    <>
      <div className="d-flex justify-content-between ">
        <h3 className="mb-4 mt-4">All Catagories</h3>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4">
       
          <Col>
            <Card>
            <Link to="/category/python/1"><Card.Img variant="top" src={logo} /></Link>
              <Card.Body>
                <Card.Title>
                  <Link to={`/category/${title}/${id}`}>{title}</Link>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                Product Downloads: 2356
              </Card.Footer>
            </Card>
          </Col>
   
      </Row>
    </>
  );
};

export default Category;
