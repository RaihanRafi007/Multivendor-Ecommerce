import React from "react";
import Layout from "../hocs/layouts/Layout";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { Card, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrderSuccess = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Card>
            <Card.Body>
              <div className="text-success text-center">
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <h3>Thanks for the Order</h3>
                <p className="mt-2">
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                  <Link to="/customer/dashboard">
                    <Button className="ms-2 btn-secondary">Dashboard</Button>
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Layout>
  );
};

export default OrderSuccess;
