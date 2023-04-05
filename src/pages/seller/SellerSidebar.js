import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SellerSidebar = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        <Link to="/seller/dashboard" className="text-decoration-none text-dark">
          Dashboard
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/seller/products" className="text-decoration-none text-dark">
          Products
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link
          to="/seller/add-product"
          className="text-decoration-none text-dark"
        >
          Add Product
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/seller/orders" className="text-decoration-none text-dark">
          Orders
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/seller/customers" className="text-decoration-none text-dark">
          Customers
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <Link to="/seller/reports" className="text-decoration-none text-dark">
          Reports
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/seller/profile" className="text-decoration-none text-dark">
          Profile
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link
          to="/seller/change-password"
          className="text-decoration-none text-dark"
        >
          Change Password
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="#" className="text-decoration-none text-danger">
          Logout
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SellerSidebar;
