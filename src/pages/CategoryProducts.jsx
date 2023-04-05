import React, { useEffect, useState } from "react";
import Layout from "../hocs/layouts/Layout";
import Container from "react-bootstrap/Container";
import CategoryProduct from "../components/category /CategoryProducts";
import Paginations from "../components/pagination/Pagination";
import { Row } from "react-bootstrap";
import SingleProduct from "../components/SingleProduct";
import { Link, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState(0);
  const { category_slug, category_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + "/products/?category="+category_id);
  }, [baseUrl, category_id]);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      });
  }

  function changeUrl(baseUrl) {
    
    fetchData(baseUrl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = totalResult / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li class="page-item">
        <Link
          onClick={() =>
            changeUrl(baseUrl + `/products/?category=${category_id}&page=${i}`)
          }
          to={`/category/${category_slug}/${category_id}/?page=${i}`}
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
  // return (
  //   <Layout>
  //     <Container>
  //       <CategoryProduct title='Python Product' />
  //       <Paginations  />
  //     </Container>
  //   </Layout>
  // );
};

export default CategoryProducts;
