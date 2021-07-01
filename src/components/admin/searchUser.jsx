import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import authAPI from '../../api/axios';
import { StyledButton } from '../ui/button';
import UserData from './userData';
import AdminNavigation from './adminNavigation';
import AdminHeader from './adminHeader';
import AuthContext from '../../contexts/authContext';

const SearchUser = () => {
  const { isUserLoggedIn, userStatus } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [editUserStatus, setEditUserStatus] = useState('');
  const [userOrders, setUserOrders] = useState([]);
  const [showUserData, setShowUserData] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await authAPI.post('/admin/user', { email: userEmail });
    setUserName(data.user.name);
    setEditUserStatus(data.user.status);
    setUserOrders(data.orders);
    setShowUserData(true);
  };

  return (
    <>
      {isUserLoggedIn && userStatus === 'admin' ? (
        <div>
          <AdminNavigation />
          <AdminHeader />
          <InputContainer>
            <Input
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter user email"
            />
          </InputContainer>
          <StyledButton type="submit" onClick={submitHandler}>Search</StyledButton>
          {showUserData ? (
            <UserData
              name={userName}
              status={editUserStatus}
              orders={userOrders}
              userEmail={userEmail}
            />
          ) : null}
        </div>
      ) : <p>No permission</p> }
    </>
  );
};

export default SearchUser;

const InputContainer = styled.div`
    margin: 1rem; 
`;

const Input = styled.input`
    width: 50%;
    max-width: 300px;
    border: 1px solid #ccc;
    padding: 7px 10px;
    margin: 0 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px #575555;
`;
