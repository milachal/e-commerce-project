import React from 'react'
import styled from 'styled-components'
import facebook from '../../images/icons/facebook.svg'
import instagram from '../../images/icons/instagram.svg'
import twitter from '../../images/icons/twitter.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <FooterItemsContainer>
                <FooterItems>About us</FooterItems>
                <FooterItems>Contact us</FooterItems>
                <FooterItems>Terms and conditions</FooterItems>
            </FooterItemsContainer>
            <Container>
                <Text>Follow us</Text>
                <LogoContainer>
                    <Logo src={facebook} alt='facebook-logo' />
                </LogoContainer>
                <LogoContainer>
                    <Logo src={instagram} alt='instagram-logo' />
                </LogoContainer>
                <LogoContainer>
                    <Logo src={twitter} alt='twitter-logo' />
                </LogoContainer>
            </Container>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    background-color: white;
    padding: 2rem 0 0 2rem;
    border-top: 1px solid black;
    text-align: center;
    bottom: 0;
    margin-top: 4rem;
`
const Container = styled.div`
    /* display: flex;
    justify-content: flex-start; */
    float: left;
    vertical-align: middle;
`
const Logo = styled.img`
    width: 1rem;
`
const FooterItems = styled.li`
list-style-type: none;
padding: 0.2rem;
`
const FooterItemsContainer = styled.ul`
    padding: 0;
    float: right;
    vertical-align: middle;
    margin: 0 0 1rem 0;
    
`
const LogoContainer = styled.span`
    padding: 1rem;
`
const Text = styled.p`
    margin: 0 0 1rem 0;
`