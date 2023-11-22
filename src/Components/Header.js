import { Button, Col, Container, Row } from "react-bootstrap";
import { APP_LOGO } from "../utils/Logo";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    })
  }

  return(
    <div className="header">
      <Container>
        <Row>
          <Col md={3}>
            <div className="app-logo">
              <img src={APP_LOGO} alt="App Logo" />
            </div>
          </Col>
          <Col md={9} >
            {user && <div className="nav">
            <div className="">
              <img  className="user-icon" src="https://lh3.googleusercontent.com/pw/ADCreHdKzT3-adBMN4sOCOT4ghStGe1kYcACvdDIGujAyk2owW9THMhw5t4vw_S1rHOdxkJ59PPdOMmvsYsuqYYXlkD5ms2UE-ZlZEDONh1GRhTXOvcSklHneZ7A9z7EV7jZHnE16mfqJjvZeB0qrcp7hZtc=w693-h924-s-no-gm?authuser=0" alt="User Img" />
            </div>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
