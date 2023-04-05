import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../hocs/layouts/Layout";
import SellerSidebar from "./SellerSidebar";

const AddProduct = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <SellerSidebar />
          </Col>
          <Col sm={8}>
            <Card>
              <Card.Header>Add Product</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="Python">Python</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Php">Php</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Description</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={8}
                      placeholder="Description"
                    />
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Product Images</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
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

export default AddProduct;
