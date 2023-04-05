import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../logo.svg";
// import sneaker from "./media/photos/hightop-lighted-sneakers.jpg";
// import shirt from "./media/photos/young-man-in-bright-fashion.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCartPlus,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../hocs/layouts/Layout";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/Themes/ThemeContext";
import SingleProduct from "../components/SingleProduct";

const Home = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/products");
  }, [baseUrl]);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      });
  }

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Layout>
      <Container>
        {/* Latest Products */}
        <div className="d-flex justify-content-between ">
          <h3 className="mb-4 mt-4">Latest Products</h3>
          <Link className="btn btn-dark mb-4 mt-4" to="/products">
            View ALl Products <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </Link>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <SingleProduct product={product} />
          ))}
        </Row>
        {/*Populer Catagories*/}
        <div className="d-flex justify-content-between ">
          <h3 className="mb-4 mt-4">Latest Catagories</h3>
          <Link className="btn btn-dark mb-4 mt-4" to="/categories">
            View ALl Catagories <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </Link>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Link to="/category/python/1">
                  <Card.Img variant="top" src={logo} />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to="/category/python/1">Catagory Title</Link>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Product Downloads: 2356
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Populer Products */}
        <div className="d-flex justify-content-between ">
          <h3 className="mb-4 mt-4">Populer Products</h3>
          <Link to="/products" className="btn btn-dark mb-4 mt-4">
            View ALl Products <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </Link>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Link to="/product/python/1">
                  <Card.Img variant="top" src={logo} />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to="/product/python/1">Product Title</Link>
                  </Card.Title>
                  <Card.Title className="text-muted">Price: $500</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button title="Add to Cart" className="btn-success btn-sm">
                    <FontAwesomeIcon icon={faCartPlus} />{" "}
                  </Button>
                  <Button
                    title="Add to Wishlist"
                    className="btn-danger btn-sm ms-1"
                  >
                    <FontAwesomeIcon icon={faHeart} />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/*Populer Sellers*/}
        <div className="d-flex justify-content-between ">
          <h3 className="mb-4 mt-4">Populer Sellers</h3>
          <a className="btn btn-dark mb-4 mt-4" href="#">
            View ALl Sellers <FontAwesomeIcon icon={faArrowRightLong} />{" "}
          </a>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <Card.Title>Seller Name</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Catagories: <a href="#">Python</a> <a href="#">JavaScript</a>{" "}
                  <a href="#">PHP</a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Ratings and  Reviews*/}
        <div>
   
          <Carousel
            className={
              isDarkMode
                ? "mt-4 text-black mb-4 p-5 bg-light"
                : "mt-4 text-white mb-4 p-5 bg-dark"
            }
          >
            <Carousel.Item className="text-center">
              <Figure>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <Figure.Caption className="blockquote-footer">
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <cite title="Source Title">Customer name</cite>{" "}
                </Figure.Caption>
              </Figure>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Figure>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <Figure.Caption className="blockquote-footer">
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <cite title="Source Title">Customer name</cite>
                </Figure.Caption>
              </Figure>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Figure>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <Figure.Caption className="blockquote-footer">
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <FontAwesomeIcon className="text-warning" icon={faStar} />
                  <cite title="Source Title">Customer name</cite>{" "}
                </Figure.Caption>
              </Figure>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* End */}
      </Container>
    </Layout>
  );
};

export default Home;
