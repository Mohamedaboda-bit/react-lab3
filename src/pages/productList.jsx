import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";
import instance from "../api/productApi";
import { Link } from "react-router";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    const skip = (page - 1) * limit;
    instance
      .get(`/products?limit=${limit}&skip=${skip}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <Container className="my-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow position-relative">
              <Card.Img variant="top" src={product.thumbnail} />
              <Badge
                bg={product.stock > 0 ? "success" : "danger"}
                className="position-absolute top-0 end-0 m-2"
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </Badge>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                  <br />
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/Detials/${product.id}`}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx + 1}
              active={idx + 1 === page}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
  );
}

export default ProductList;
