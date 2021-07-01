import React, { useState } from 'react';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import UserOrderData from './userOrderData';
import { StyledButton } from '../ui/button';

const UserData = ({
  userEmail, name, status, orders,
}) => {
  const [userStatus, setUserStatus] = useState(status);

  const changeUserStatus = async (e) => {
    e.preventDefault();
    await authAPI.patch('/admin/user', { status: userStatus, email: userEmail });
  };

  return (
    <Container>
      <span>
        name:
        {name}
      </span>
      <br />
      <select value={userStatus} name="User status" onChange={(e) => setUserStatus(e.target.value)}>
        <option name="user">user</option>
        <option name="admin">admin</option>
      </select>
      <StyledBtn type="submit" onClick={changeUserStatus}>send</StyledBtn>
      <UserOrderData orders={orders} />
    </Container>
  );
};

export default UserData;

const Container = styled.div`
    margin: 1rem;
    padding: 2rem;
`;

const StyledBtn = styled(StyledButton)`
    width: 5rem;
`;
