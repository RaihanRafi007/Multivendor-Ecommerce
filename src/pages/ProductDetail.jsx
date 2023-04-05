import React, { useContext, useEffect, useState } from "react";
import { Badge, Button, Carousel, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import CategoryProduct from "../components/category /CategoryProducts";
import ProductDetails from "../components/products/ProductDetails";
import SingleProduct from "../components/SingleProduct";
import SingleRelatedProduct from "../components/SingleRelatedProduct";
import Layout from "../hocs/layouts/Layout";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartPlus,
  faCircleMinus,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./Context";

const ProductDetail = () => {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [product, setProduct] = useState([]);
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  const cartContext = useContext(CartContext);
  const { cartData, setCartData } = cartContext;

  // const { cartData, setCartData } = useContext(CartContext);

  // console.log("CartData:", cartData);
  const { product_slug, product_id } = useParams();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetchData(baseUrl + "/product/" + product_id);
    fetchRelatedData(baseUrl + "/related-products/" + product_id);

    function checkProductInCart(product_id) {
      var previousCart = localStorage.getItem("cartData");
      var cartJson = JSON.parse(previousCart);
      if (cartJson !== null) {
        cartJson.map((cart) => {
          if (cart !== null && cart.product.id === product.id) {
            setCartStatus(true);
          }
        });
      }
    }

    checkProductInCart(product_id);
  }, [baseUrl, product_id, product.id]);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setProductImgs(data.product_images);
        setProductTags(data.tag_list);

        // console.log(data.tag_list);
      });
  }

  function fetchRelatedData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setRelatedProducts(data.results);

        // console.log(data);
      });
  }

  const tagsLinks = [];
  for (let i = 0; i < productTags.length; i++) {
    let tag = productTags[i].trim();
    tagsLinks.push(
      <Badge className="me-1" as={Link} to={`/products/${tag}`} bg="secondary">
        {tag}
      </Badge>
    );
  }

  const cartAddHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);

    const cartData = {
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      },
      user: {
        id: 1,
      },
    };

    if (cartJson !== null) {
      cartJson.push(cartData);
      var cartString = JSON.stringify(cartJson);
      localStorage.setItem("cartData", cartString);
      setCartData(cartJson);
    } else {
      var newCartList = [];
      newCartList.push(cartData);
      var cartString = JSON.stringify(newCartList);
      localStorage.setItem("cartData", cartString);
    }

    setCartStatus(true);
  };

  const cartRemoveHandler = () => {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);
    // console.log("cartJson before deleting: ", cartJson); // add this line to log the cartJson before deleting

    cartJson.map((cart, index) => {
      // console.log("cart:", cart);
      if (cart !== null && cart.product.id === product.id) {
        // delete cartJson[index];
        cartJson.splice(index, 1);
      }
    });
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartData", cartString);
    setCartStatus(false);
    setCartData(cartJson);
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {productImgs.map((img, index) => {
                if (index === 0) {
                  return (
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={img.image}
                        alt={index}
                      />
                    </Carousel.Item>
                  );
                } else {
                  return (
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={img.image}
                        alt={index}
                      />
                    </Carousel.Item>
                  );
                }
              })}
            </Carousel>
          </Col>
          <Col>
            {/* <ProductDetails tagsLinks={tagsLinks} product={product} /> */}
            <>
              <h3>{product.title}</h3>
              <p>{product.detail}</p>

              <h5 className="card-tile">Price: $ {product.price}</h5>
              <p>
                <a href={product.demo_url}>
                  <Button
                    as="Link"
                    target={"_blank"}
                    className="mb-1 me-2"
                    title="Demo"
                    variant="dark"
                  >
                    <FontAwesomeIcon icon={faEye} /> Demo
                  </Button>
                </a>
                {!cartStatus && (
                  <Button
                    onClick={cartAddHandler}
                    className="mb-1 me-2"
                    title="Add to Cart"
                    variant="info"
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                  </Button>
                )}

                {cartStatus && (
                  <Button
                    onClick={cartRemoveHandler}
                    className="mb-1 me-2"
                    title="Remove from"
                    variant="warning"
                  >
                    <FontAwesomeIcon icon={faCircleMinus} /> Remove from Cart
                  </Button>
                )}

                <Button
                  variant="success"
                  className="mb-1 me-2 btn-"
                  title="Buy Now"
                >
                  <FontAwesomeIcon icon={faBagShopping} /> Buy Now
                </Button>
                <Button variant="danger" title="Add to Wishlist">
                  <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                </Button>
              </p>
              <hr />
              <div className="producttags">
                <h5>Tags</h5>
                <p>{tagsLinks}</p>
              </div>
            </>
          </Col>
        </Row>

        <Row>
          {" "}
          {relatedProducts.length > 0 && (
            <>
              <h3>Related Products</h3>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {relatedProducts.map((product, index) => {
                  if (index === 0) {
                    return (
                      <Carousel.Item>
                        <SingleRelatedProduct product={product} />
                      </Carousel.Item>
                    );
                  } else {
                    return (
                      <Carousel.Item>
                        <SingleRelatedProduct product={product} />
                      </Carousel.Item>
                    );
                  }
                })}
              </Carousel>
            </>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
