import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import styled from 'styled-components';
import { useHistory, NavLink } from 'react-router-dom';

import { StyledButton } from '../ui/button';
import AuthContext from '../../contexts/authContext';

const AdminNavigation = () => {
  // TODO: admin navigation - flashes on products, add new user and home
  const { setIsUserLoggedIn, setUserStatus } = useContext(AuthContext);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const closeHamburger = (e) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
        setToggleHamburger(false);
      }
    };

    document.addEventListener('mousedown', closeHamburger);
    return () => {
      document.removeEventListener('mousedown', closeHamburger);
    };
  }, [hamburgerRef]);

  const history = useHistory();

  const logout = async () => {
    document.cookie = 'jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUserStatus('');
    setIsUserLoggedIn(false);
    history.push('/');
  };

  return (
    <div>
      <Navbar
        ref={hamburgerRef}
        openDrawer={toggleHamburger}
      >
        <HamburgerWrapper onClick={() => setToggleHamburger(!toggleHamburger)}>
          <HamburgerLines />
        </HamburgerWrapper>
        <NavbarItems
          toggleHamburger={toggleHamburger}
        >
          <NavbarItem>
            <StyledLink activeClassName="any" exact to="/">Home</StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledLink activeClassName="any" to="/products">Products</StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledLink activeClassName="any" to="/admin/add-product">Add new product</StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledLink activeClassName="any" to="/admin/search-user">Search user</StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledBtn onClick={logout}>Logout</StyledBtn>
          </NavbarItem>
        </NavbarItems>
      </Navbar>
    </div>
  );
};

export default AdminNavigation;

const Navbar = styled.nav` 
    flex: 1;
    align-self: flex-start;
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: space-between;
    background-color: black;

    @media only screen and (max-width: 640px) {
        width: 100%;
        top: 0;
    }
`;

const NavbarItems = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    padding: 15px;
    width: 100%;
    text-transform: uppercase;
    color: #fff;

    @media only screen and (max-width: 640px) {
        height: 100%;
        flex-direction: column;
        padding: 1rem 2rem;
        transition: 0.2s ease-out;
        //check animation
        display: ${(prop) => (!prop.toggleHamburger ? 'none' : null)};
    }
`;

const NavbarItem = styled.li`
    padding: 0 1rem;
    cursor: pointer;
    color: white;

    @media only screen and (max-width: 640px) {
        padding: 1rem 0;
        color: white;
    }
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    cursor: pointer;
    &.${(props) => props.activeClassName} {
        font-weight: bold;
        border-bottom: 1px solid #ffff;
    }
`;

const HamburgerWrapper = styled.div`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    display: none;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    @media only screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-self: start;
        margin-top: 25px;
    }

    &:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
    }
`;

const HamburgerLines = styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        width: 40px;
        background-color: #ffff;
        position: absolute;
    }

    &:after {
        top: -0.8rem;
    }

    &:before {
        top: 0.8rem;
    }
`;

const StyledBtn = styled(StyledButton)`
    background-color: red;
    text-align: center;
    margin-left: 0;
    width: 6rem;
`;
