import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [toggleHamburger, setToggleHamburger] = useState(false)
    const hamburgerRef = useRef(null)
    console.log(hamburgerRef)

    useEffect(() => {
        const closeHamburger = (e) => {
            if (hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
                setToggleHamburger(false)
            }
        }

        document.addEventListener("mousedown", closeHamburger)
        return () => {
            document.removeEventListener("mousedown", closeHamburger);
        };
    }, [hamburgerRef])
    
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
                        <StyledLink to='/'>Home</StyledLink>
                    </NavbarItem>
                    <NavbarItem>
                        <StyledLink to='/products'>Products</StyledLink>
                    </NavbarItem>
                    <NavbarItem>
                        <StyledLink to='/account/me'>My Account</StyledLink>
                    </NavbarItem>
                    <NavbarItem>
                        About us
                    </NavbarItem>
                </NavbarItems>
            </Navbar>
        </div>
    )
}

const Navbar = styled.nav` 
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;

    @media only screen and (max-width: 640px) {
        width: 100%;
        top: 0;
    }
`

const NavbarItems = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
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
        display: ${prop => !prop.toggleHamburger ? 'none' : null};
    }
`

const NavbarItem = styled.li`
    padding: 0 1rem;
    cursor: pointer;
    color: white;

    @media only screen and (max-width: 640px) {
        padding: 1rem 0;
        color: white;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    cursor: pointer;
`

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
`

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
`

export default Navigation;