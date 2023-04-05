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

const VendorOrders = () => {
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
                    {" "}
                    <Link to="#">
                      {" "}
                      <Image width={50} src={logo} />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        django
                      </Link>
                    </p>
                  </td>
                  <td>$ 50</td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        className="me-1 text-success"
                        icon={faCheckCircle}
                      />
                      Completed
                    </span>
                  </td>
                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Change Status"
                    >
                      <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Sent</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    {" "}
                    <Link to="#">
                      {" "}
                      <Image width={50} src={logo} />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        django
                      </Link>
                    </p>
                  </td>
                  <td>$ 150</td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        className="me-1 text-success"
                        icon={faCheckCircle}
                      />
                      Completed
                    </span>
                  </td>
                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Change Status"
                    >
                      <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Sent</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
                    </DropdownButton>
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

export default VendorOrders;
