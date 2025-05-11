import CartItem from './cartIems';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CartPage() {
  const cartItems = useSelector((state) => state.cartItems.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h2 className="my-4">Cart</h2>

      {cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <>
          <Row className="border-bottom py-2 fw-bold">
            <Col xs={2}></Col>
            <Col xs={4}>Description</Col>
            <Col xs={2}>Quantity</Col>
            <Col xs={2}>Remove</Col>
            <Col xs={2}>Price</Col>
          </Row>

          {cartItems.map((item) => (
            <CartItem
              key ={item.code}
              name = {item.name}
              image = {item.image}
              code = {item.code}
              price = {item.price}
              quantity={item.quantity}
            />
          ))}

          <Row className="justify-content-end mt-4">
            <Col xs={4}>
              <h4>Total: £{total.toFixed(2)}</h4>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default CartPage;
