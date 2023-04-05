import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../hocs/layouts/Layout";


const VendorChangePassword = () => {
  return (
    <Layout>
      <Container>
      <Row>
          <Col sm={4}>
            <Sidebar />
          </Col>
          <Col sm={8}>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          </Col>
        </Row>
        
      </Container>
    </Layout>
  );
};

export default VendorChangePassword;
