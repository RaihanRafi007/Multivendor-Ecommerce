import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Layout from "../hocs/layouts/Layout";
import SingleProduct from "../components/SingleProduct";
import Paginations from "../components/pagination/Pagination";
import { Pagination } from "react-bootstrap";

const AllProducts = () => {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/products");
  }, [baseUrl]);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      });
  }

  function changeUrl(baseUrl) {
    console.log(baseUrl);
    fetchData(baseUrl);
  }

  var links = [];
  var limit = 12;
  var totalLinks = totalResult / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li class="page-item">
        <Link
          onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          to={`/products/?page=${i}`}
          class="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <Layout>
      <Container>
        <h3 className="mb-4 ">All Products</h3>
        {/* <div className="d-flex justify-content-between ">
        
      </div> */}
        <Row className="mb-4">
          {products.map((product) => (
            <SingleProduct product={product} />
          ))}
        </Row>
        {/* {totalResult}
      <Paginations/> */}
        <nav aria-label="...">
          <ul class="pagination pagination-sm">{links}</ul>
        </nav>
      </Container>
    </Layout>
  );
};

export default AllProducts;
