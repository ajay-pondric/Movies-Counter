import React, { useRef, useState } from 'react'
import Header from './Header';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { checkValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [singIn, setSignIn] = useState(true)
const [errorMessage, setErrorMessage] = useState(null);
const dispatch = useDispatch();
const navigate = useNavigate();

  const name = useRef(null);
  const email =  useRef(null);
  const password = useRef(null);

  const checkValidValue = () => {
  
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return ;

     if(!singIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user,  {
      displayName: name.current.value, 
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
      navigate("/browse")
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    })
     navigate("/browse")
     console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
    
    // ..
  });
     }
     else{
         
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
  });
     }

  }

  const handleClick = () => {
   setSignIn(!singIn);
  }
  return (
    <div>
    <Header />
    <div className='main-img'>
    </div>
    <Container>
      <Row >
        <Col >
          <div className='login-form'>
            <h2>{singIn ? "Sign In" : "Sign Up"}</h2>
            <form>
            {
              !singIn && <input className='input' type='text' placeholder='Full name' />
            }
              <input ref={email} className='input' type='text' placeholder='Email address' />
              <input ref={password} className='input' type='password' placeholder='Enter password' />
              <p className='message'>{errorMessage}</p>
              <Button className='login-button' onClick={checkValidValue}  variant='danger'>{singIn ? "Sign In" : "Sign Up"}</Button>
            </form>
            <p className='pointer' onClick={handleClick}>{ singIn ?  "New to Netflix? sign up now." : "Already register sign in"}.</p>
          </div>
        </Col>
      </Row>
    </Container>
   </div>
  );
};

export default Login;
