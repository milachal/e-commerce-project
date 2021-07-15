import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import authAPI from '../../api/axios';
import Navigation from '../navigation/navigation';
import Button from '../ui/button';
import AuthContext from '../../contexts/authContext';
import CartContext from '../../contexts/cartContext';

const Login = () => {
  const {
    setIsUserLoggedIn, setUserStatus, isUserLoggedIn, userStatus,
  } = useContext(AuthContext);
  const { fetchCart } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (isUserLoggedIn && userStatus === 'admin') {
      history.push('/products');
    }
    if (isUserLoggedIn && userStatus === 'user') {
      history.push('/account/me');
    }
  }, [isUserLoggedIn, userStatus, history]);

  const loginHandler = async () => {
    try {
      const response = await authAPI.post('account/login', { email, password });
      if (response.status === 200 && response.data.status === 'admin') {
        setIsUserLoggedIn(true);
        setUserStatus('admin');
        fetchCart();
        history.push('/products');
      } else if (response.status === 200 && response.data.status === 'user') {
        setIsUserLoggedIn(true);
        setUserStatus('user');
        fetchCart();
        history.push('/account/me');
      }
    } catch (e) {
      return setError('Wrong credentials.');
    }
  };

  return (
    <>
      <Navigation />
      <LoginContainer>

        <Header data-cy="login-page-title">Log in</Header>
        {error ? <Error>{error}</Error> : null}
        <InputContainer>
          <Input
            type="email"
            name="username"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-cy="email-input"
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-cy="password-input"
          />
        </InputContainer>
        <Button
          type="submit"
          onClick={loginHandler}
          dataAttr="login-submit-button"
        >
          Log in
        </Button>
        <br />
        <ForgotPass>Forgot your password?</ForgotPass>
      </LoginContainer>
      <SignupContainer>
        <Header>Don't have an account?</Header>
        <Text>
          If you don't have an account, please proceed by clicking the following button
          to continue first-time registration.
        </Text>
        <br />
        <Link href="/account/signup">
          <Button type="submit">Create an account</Button>
        </Link>
      </SignupContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
    display: inline-block;
    width: 50%;
    @media screen and (max-width: 980px) {
        display: block;
        width: 100%;
    }
`;

const Error = styled.span`
    color: #ff0000;
    margin: 3rem;
`;

const InputContainer = styled.div`
    margin: 1rem; 
`;

const Header = styled.h2`
    font-size: 200%;
    margin-left: 3rem;  

`;

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 12px 20px;
    margin: 0 2rem;
    border-radius: 5px;
    /* box-shadow: 0 0 5px #575555; */
`;
/*
styled.input[type="placeholder"]
    color: #575555 */

const ForgotPass = styled.h6`
    display: inline-block;
    font-size: 80%;
    margin: 1rem 7.5rem;
    text-decoration: underline; 
    cursor: pointer;
    text-align: center; 
`;
const SignupContainer = styled.div`
    display: inline-block;
    width: 50%;  
    vertical-align: top;
    @media screen and (max-width: 980px) {
        display: block;
        width: 100%;
    }
`;

const Text = styled.p`
    display: inline-block;  
    margin-left: 3rem;
    width: 80%;
    max-width: 300px;   
`;

const Link = styled.a`
    text-decoration: none;
    color: white;
    &:active{
        color: white;
    }
`;
