import React from "react";
import { Button, Card, Container, Image, Table } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import Layout from "../../hocs/layouts/Layout";
import SellerSidebar from "./SellerSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPlusCircle,
  faSpinner,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const SellerProducts = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <SellerSidebar />
          </Col>
          <Col sm={8}>
            <h3 className="mt-1 d-flex justify-content-end">
              <Link to="/seller/add-product">
                {" "}
                <Button variant="outline-success" className="mb-4">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Product
                </Button>{" "}
              </Link>
            </h3>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {/* {" "}
                    <Link to="#">
                      {" "}
                      <Image width={50} src={logo} />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        django
                      </Link>
                    </p> */}
                    Product Title
                  </td>
                  <td>$ 50</td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        className="text-success"
                        icon={faCheckCircle}
                      />
                      Published
                    </span>
                  </td>
                  <td>
                    {" "}
                    <Button className="me-1 mt-1" variant="info">
                      View
                    </Button>
                    <Button className="me-1 mt-1">Edit</Button>
                    <Button className="mt-1" variant="danger">
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SellerProducts;
