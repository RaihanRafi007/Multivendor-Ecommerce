import React from "react";
import { Card, Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import Layout from "../../hocs/layouts/Layout";
import SellerSidebar from "./SellerSidebar";

const SellerDashboard = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <SellerSidebar />
          </Col>
          <Col sm={8}>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Products</h4>
                    <h4>
                      <Link to="#">23</Link>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Orders</h4>
                    <h4>
                      <Link to="#">103</Link>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Customers</h4>
                    <h4>
                      <Link to="#">123</Link>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SellerDashboard;
