import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function NotFound() {
  return (
    <Container className="text-center my-5">
      <Alert variant="danger">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Button as={Link} to="/home" variant="primary">
          Go Home
        </Button>
      </Alert>
    </Container>
  );
}

export default NotFound;
