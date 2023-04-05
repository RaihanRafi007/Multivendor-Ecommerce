import React, { useEffect, useState } from "react";
import Layout from "../hocs/layouts/Layout";
import Container from "react-bootstrap/Container";
import Category from "../components/category /Categories";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/categories");
  }, [baseUrl]);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResults(data.count);
      });
  }

  function changeUrl(baseUrl) {
    console.log(baseUrl);
    fetchData(baseUrl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = totalResult / limit
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li class="page-item">
        <Link
          onClick={() => changeUrl(baseUrl+`/categories/?page=${i}`)}
          to={`/categories/?page=${i}`}
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
        {categories.map((category) => (
          <Category category={category} />
        ))}
        <nav aria-label="...">
        <ul class="pagination pagination-sm">
       {links}
        </ul>
      </nav>
      </Container>
    </Layout>
  );
};

export default Categories;
