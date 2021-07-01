import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../ui/button';

const DeletePopUp = ({
  text, deleteFunc, children, closePopUp,
}) => (
  <>
    <Text>{text}</Text>
    {children}
    <div>
      <Button onClick={deleteFunc}>Yes</Button>
      <Button onClick={closePopUp}>No</Button>
    </div>
  </>
);

export default DeletePopUp;

// const Container = styled.div`
//     border: 1px solid #C0C0C0;
//     background-color: #fff;
//     z-index: 9999;
// `
const Text = styled.h4`
    padding: 1rem 1rem 0 1rem;
    text-align: center;
    font-size: 20px;
`;

const Button = styled(StyledButton)`
        width: 20%;
        min-width: 60px;
        margin: 1rem 2rem;
`;
