import React from "react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Table,
} from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faSpinner,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../hocs/layouts/Layout";
import SellerSidebar from "./SellerSidebar";

const Customers = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <SellerSidebar />
          </Col>
          <Col sm={8}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>12345678910</td>

                  <td>
                    <Button className="btn-sm ms-1 mt-1">Orders</Button>

                    <Button variant="danger ms-1 mt-1" className="btn-sm">
                      Remove from list
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alex Hogan</td>
                  <td>alex@gmail.com</td>
                  <td>12346678910</td>

                  <td>
                    <Button className="btn-sm ms-1 mt-1">Orders</Button>

                    <Button variant="danger ms-1 mt-1" className="btn-sm">
                      Remove from list
                    </Button>
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

export default Customers;
