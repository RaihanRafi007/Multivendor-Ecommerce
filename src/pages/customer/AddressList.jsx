import { faCheckCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../hocs/layouts/Layout";


const AddressList = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Row>
              <Col className="d-flex justify-content-end">
              <Link  to='/customer/add-address' > <Button variant="outline-success" className="mb-4"><FontAwesomeIcon icon={faPlusCircle} /> Add Address</Button> </Link>
              </Col>
            </Row>
            <Row>

              <Col sm={6} md={4} className=" mb-2">
                <Card>
                  <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <FontAwesomeIcon
                        className="text-success mb-2"
                        icon={faCheckCircle}
                      />{" "}
                      <br/>
                      Badda, Dhaka-1212, Bangladesh
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className=" mb-2">
                <Card>
                  <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <Badge className="bg-secondary mb-2">Meke Default</Badge>
                      <br /> Badda, Dhaka-1212, Bangladesh
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className=" mb-2">
                <Card>
                <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <Badge className="bg-secondary mb-2">Meke Default</Badge>
                      <br /> Badda, Dhaka-1212, Bangladesh
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className=" mb-2">
                <Card>
                <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <Badge className="bg-secondary mb-2">Meke Default</Badge>
                      <br /> Badda, Dhaka-1212, Bangladesh
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className=" mb-2">
                <Card>
                <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <Badge className="bg-secondary mb-2">Meke Default</Badge>
                      <br /> Badda, Dhaka-1212, Bangladesh
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className=" mb-2">
                <Card>
                <Card.Body className="text-muted">
                    <h6>
                      {" "}
                      <Badge className="bg-secondary mb-2">Meke Default</Badge>
                      <br /> Badda, Dhaka-1212, Bangladesh
                    </h6>
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

export default AddressList;
