import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        <Link to="#" className="text-decoration-none text-dark">
          Dashboard
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/customer/orders" className="text-decoration-none text-dark">
          Orders
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <Link
          to="/customer/wishlist"
          className="text-decoration-none text-dark"
        >
          Wishlist
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link to="/customer/profile" className="text-decoration-none text-dark">
          Profile
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <Link
          to="/customer/change-password"
          className="text-decoration-none text-dark"
        >
          Change Password
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link
          to="/customer/addresses"
          className="text-decoration-none text-dark"
        >
          Address
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

export default Sidebar;
