import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import instance from "../api/productApi";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from '../store/slices/cartItems';

function ProductDetail() {
  const [product, setproduct] = useState();

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    instance
      .get(`/products/${params.id}`)
      .then((response) => {
        setproduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Container className="my-5">
      {product && (
        <Card>
          <Row className="g-0">
            <Col md={5}>
              <Image src={product.images[0]} fluid />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Brand:</strong> {product.brand}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Price:</strong> ${product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Stock:</strong> {product.stock}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Rating:</strong> {product.rating}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tags:</strong> {product.tags.join(", ")}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Availability:</strong> {product.availabilityStatus}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Shipping:</strong> {product.shippingInformation}
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" as={Link} to={`/cart`} onClick={() => dispatch(addItem({
                  name: product.title,
                  image: product.images[0],
                  code: product.id,
                  price: product.price,
                  quantity: 1,
                }))}>
                  add to cart
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
}

export default ProductDetail;
