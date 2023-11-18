import { Col, Container, Row } from "react-bootstrap";
import { APP_LOGO } from "../utils/Logo";

const Header = () => {
  return(
    <div className="header">
      <Container>
        <Row>
          <Col md={3}>
            <div className="app-logo">
              <img src={APP_LOGO} alt="App Logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;
