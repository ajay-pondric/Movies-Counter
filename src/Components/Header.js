import { Button, Col, Container, Row } from "react-bootstrap";
import { APP_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    })
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })
    return () => unsubscribe();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  }


  return (
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
              <Button className="search-button" onClick={handleSearchClick}>{showGptSearch ? "Home Page" : " GPTSearch"} </Button>
              <div className="">
                <img className="user-icon" src={USER_AVATAR} alt="User Img" />
              </div>
              <Button onClick={handleSignOut}>Sign Out</Button>
              {showGptSearch && <select className="select-language" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>}
            </div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
