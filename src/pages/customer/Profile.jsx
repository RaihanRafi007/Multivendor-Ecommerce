import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../hocs/layouts/Layout";


const Profile = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <Sidebar />
          </Col>
          <Col sm={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" />
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

export default Profile;
