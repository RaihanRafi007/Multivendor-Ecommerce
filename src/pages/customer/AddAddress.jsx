import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../hocs/layouts/Layout";
// import Layout from "../hocs/layouts/Layout";

const AddAddress = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col className="mt-1" sm={4}>
            <Sidebar />
          </Col>
          <Col className="mt-1" sm={8}>
            <Card>
              <Card.Header>Add Address</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} />

                  <Button className="mt-2" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AddAddress;
