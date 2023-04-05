import React from "react";
import { Card, Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../hocs/layouts/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <Sidebar/>
          </Col>
          <Col sm={8}>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Orders</h4>
                    <h4>
                      <Link to="#">123</Link>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Wishlist</h4>
                    <h4>
                      <Link to="#">123</Link>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <h4>Total Address</h4>
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

export default Dashboard;
