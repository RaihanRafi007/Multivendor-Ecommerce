import React from "react";
import { Button, Card, Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import Layout from "../../hocs/layouts/Layout";
import SellerSidebar from "./SellerSidebar";

const Reports = () => {
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
                    <h4>Daily Reports</h4>

                    <Link to="#">
                      {" "}
                      <Button as="Link" variant="info">
                        View
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Monthly Reports</h4>

                    <Link to="#">
                      {" "}
                      <Button as="Link" variant="info">
                        View
                      </Button>{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Yearly Reports</h4>

                    <Link to="#">
                      {" "}
                      <Button as="Link" variant="info">
                        View
                      </Button>{" "}
                    </Link>
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

export default Reports;
