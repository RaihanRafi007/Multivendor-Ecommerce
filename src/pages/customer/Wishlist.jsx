import React from "react";
import { Button, Container, Image, Table } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import logo from "../../logo.svg";

import Layout from "../../hocs/layouts/Layout";

const Wishlist = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={4}>
            <Sidebar />
          </Col>
          <Col sm={8}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
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
                    {" "}
                    <Button className="btn-danger">Remove</Button>{" "}
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
                        React
                      </Link>
                    </p>
                  </td>
                  <td>$ 100</td>

                  <td>
                    {" "}
                    <Button className="btn-danger">Remove</Button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    <Link to="#">
                      {" "}
                      <Image width={50} src={logo} />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        Laravel
                      </Link>
                    </p>
                  </td>
                  <td>$ 50</td>

                  <td>
                    {" "}
                    <Button className="btn-danger">Remove</Button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    <Link to="#">
                      {" "}
                      <Image width={50} src={logo} />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        JavaScript
                      </Link>
                    </p>
                  </td>
                  <td>$ 50</td>

                  <td>
                    {" "}
                    <Button className="btn-danger">Remove</Button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    {" "}
                    <Link to="#">
                      {" "}
                      <Image
                        as={Link}
                        to="/categories"
                        width={50}
                        src={logo}
                      />{" "}
                    </Link>
                    <p>
                      <Link className="" to="#">
                        Python
                      </Link>
                    </p>
                  </td>
                  <td>$ 200</td>

                  <td>
                    {" "}
                    <Button className="btn-danger">Remove</Button>{" "}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>$ 1000</th>
                  <td></td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Wishlist;
