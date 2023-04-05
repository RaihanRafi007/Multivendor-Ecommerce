import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Layout from "../../hocs/layouts/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Register = () => {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [formError, setFormError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const inputHandler = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const formData = new FormData();
    formData.append("first_name", registerFormData.first_name);
    formData.append("last_name", registerFormData.last_name);
    formData.append("username", registerFormData.username);
    formData.append("email", registerFormData.email);
    formData.append("mobile", registerFormData.mobile);
    formData.append("password", registerFormData.password);

    axios
      .post(baseUrl + "customer/register/", formData)
      .then(function (response) {
        console.log(response);
        if (response.data.bool === false) {
          setFormError(true);
          setErrorMsg(response.data.msg);
          setSuccessMsg("");
        } else {
          console.log(response.data);
          setRegisterFormData({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            mobile: "",
            password: "",
          });
          setFormError(false);
          setErrorMsg("");
          setSuccessMsg(response.data.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(formData);
  };

  const disabled =
    !registerFormData.first_name ||
    !registerFormData.last_name ||
    !registerFormData.email ||
    !registerFormData.mobile ||
    !registerFormData.username ||
    !registerFormData.password;

  return (
    <Layout>
      <Container>
        <Card bg="light">
          <Card.Header align="center" as="h5">
            Register
          </Card.Header>
          {successMsg && <p className="text-success">{successMsg}</p>}
          {errorMsg && <p className="text-danger"> {errorMsg} </p>}
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  value={registerFormData.first_name}
                  onChange={inputHandler}
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  value={registerFormData.last_name}
                  onChange={inputHandler}
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  value={registerFormData.username}
                  onChange={inputHandler}
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  value={registerFormData.email}
                  onChange={inputHandler}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  name="mobile"
                  value={registerFormData.mobile}
                  onChange={inputHandler}
                  type="number"
                  placeholder="mobile"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={registerFormData.password}
                  onChange={inputHandler}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={submitHandler}
                disabled={disabled}
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

export default Register;
