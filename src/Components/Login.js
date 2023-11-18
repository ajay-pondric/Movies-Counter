import React, { useState } from 'react'
import Header from './Header';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Login = () => {
  const [singIn, setSignIn] = useState(true)

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
              <input className='input' type='text' placeholder='Email address' />
              <input className='input' type='password' placeholder='Enter password' />
              <Button  variant='danger'>{singIn ? "Sign In" : "Sign Up"}</Button>
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
