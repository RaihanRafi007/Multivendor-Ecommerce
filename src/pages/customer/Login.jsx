import React, { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Layout from "../../hocs/layouts/Layout";
import axios from "axios";
// import { UserContext } from "../Context";

const Login = () => {
  // const userContext = useContext(UserContext);

  const baseUrl = "http://127.0.0.1:8000/api/";
  const [formError, setFormError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(loginFormData);

  const submitHandler = (e) => {
    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);

    axios
      .post(baseUrl + "customer/login/", formData)
      .then(function (response) {
        console.log(response);
        if (response.data.bool === false) {
          setFormError(true);
          setErrorMsg(response.data.msg);
          // userContext.login(true)
        } else {
          // console.log(response.data);
          localStorage.setItem("customer_id", response.data.id);
          localStorage.setItem("customer_login", true);
          localStorage.setItem("customer_username", response.data.user);
          setFormError(false);
          setErrorMsg("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(formData);
  };
  // console.log(localStorage.getItem("customer_login"));

  const checkCustomer = localStorage.getItem("customer_login");
  if (checkCustomer) {
    window.location.href = "/customer/dashboard";
  }

  return (
    <Layout>
      <Container>
        <Card bg="light">
          <Card.Header align="center" as="h5">
            Login
          </Card.Header>
          <Card.Body>
            {formError && <p className="text-danger">{errorMsg}</p>}

            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  value={loginFormData.username}
                  onChange={inputHandler}
                  type="text"
                  placeholder="Enter your Username"
                  required
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={loginFormData.password}
                  onChange={inputHandler}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button
                disabled={!loginFormData.username || !loginFormData.password}
                variant="primary"
                type="button"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default Login;
