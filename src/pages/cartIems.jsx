import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeItem,increamentItem, decreamentItem } from '../store/slices/cartItems';
function CartItem({ Key, name, image, code, price, quantity }) {
  const dispatch = useDispatch();
  return (
    <Row className="align-items-center py-3 border-bottom" key={Key}>
      <Col xs={2}>
        <Image src={image} fluid />
      </Col>
      <Col xs={4}>
        <h5>{name}</h5>
        <small>Product Code: {code}</small>
      </Col>
      <Col xs={2}>
        <div className="d-flex align-items-center">
          <Button variant="dark" onClick={()=> dispatch(increamentItem(code))}>+</Button>
          <Form.Control
            type="text"
            value={quantity}
            readOnly
            className="mx-2 text-center"
            style={{ width: '50px' }}
          />
          <Button variant="light" onClick={()=> dispatch(decreamentItem(code))}>-</Button>
        </div>
      </Col>
      <Col xs={2}>
        <Button variant="light" onClick={()=>dispatch(removeItem(code))}>×</Button>
      </Col>
      <Col xs={2}>
        <strong>£{price}</strong>
      </Col>
    </Row>
  );
}


export default CartItem;