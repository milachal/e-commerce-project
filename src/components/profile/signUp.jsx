import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import { StyledButton } from '../ui/button';
import Navigation from '../navigation/navigation';
import AuthContext from '../../contexts/authContext';

const SignUp = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      return setError('Password doesn\'t match.');
    }
    if (!checkbox) {
      return setError('Please, agree to our terms and conditions.');
    }
    try {
      const response = await authAPI.post('account/signup', { email, name, password });
      history.push('/');
      if (response.data.status === 'user') {
        setIsUserLoggedIn(true);
      }
    } catch (e) {
      if (e.response && e.response.status === 500) {
        setError('Something went wrong. Please try again.');
      }
      if (e.response && e.response.status === 400) {
        setError('Email exists.');
      }
      return e;
    }
  };

  return (
    <>
      <Navigation />
      <Container>
        <form>
          <Header>Sign up</Header>
          {error ? <Error>{error}</Error> : null}
          <Input
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Repeat password"
            name="password-repeat"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <TextContainer>
            <input
              type="checkbox"
              name="terms"
              value={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            By creating an account you agree to our
            {' '}
            {/* eslint-disable */}
            <a href="#">Terms&#38;Privacy</a>
          </TextContainer>
          <Button type="submit" onClick={onSubmitHandler}>Submit</Button>
        </form>
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.div`
    display: inline-block;
`;

const Header = styled.h2`
    font-size: 200%;
    margin-left: 2rem;  
`;

const Input = styled.input`
    display: block;
    width: 80%;
    max-width: 300px;
    border: 1px solid #6666;
    padding: 12px 20px;
    margin: 0.5rem 2rem;
    border-radius: 5px;
`;

const TextContainer = styled.div`
    display: inline-block;  
    margin: 1rem 2rem;
    width: 80%;
    max-width: 300px;   
`;

const Error = styled.span`
    color: #ff0000;
    margin: 2rem;
`;

const Button = styled(StyledButton)`
    margin-left: 2rem;  
`;
