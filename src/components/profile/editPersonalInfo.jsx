import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import { StyledButton } from '../ui/button';

const EditPersonalInfo = (props) => {
  const history = useHistory();
  const saveEdits = async () => {
    await authAPI.patch('account/edit', {
      name: props.name,
      email: props.email,
    });
    history.push(props.url);
  };

  return (
    <Container>
      <h2>Edit your personal information</h2>
      <InputContainer>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          value={props.nameValue}
          onChange={props.onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={props.emailValue}
          onChange={props.onChangeEmail}
        />
      </InputContainer>
      <Button type="submit" onClick={saveEdits}>Save</Button>
    </Container>
  );
};

export default EditPersonalInfo;

const Container = styled.div`
    vertical-align: top;
    display: inline-block;
    margin-left: 5rem;
    @media only screen and (max-width: 780px) {
        display: block; 
        margin-left: 3rem;  
    }
`;

const InputContainer = styled.div`
    margin: 1rem 0 1rem 0; 
`;

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    border: 1px solid #d6d6d6;
    padding: 12px 20px;
    margin: 0 2rem 0 0;
    border-radius: 5px;
    /* box-shadow: 0 0 5px #575555; */
`;

const Button = styled(StyledButton)`
    margin: 0;
    max-width: 150px;
`;
