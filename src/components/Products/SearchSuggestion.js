import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SearchSuggestion = props => {
    return(
        <StyledLink to={`/product/${props.id}`} >
            <Container>

                <div>
                    <Image 
                        src={props.src} 
                        alt={props.alt}
                    />
                </div>
                <TitleContainer>
                    <h5>{props.title}</h5>
                </TitleContainer>
                <div>
                    <h5>{props.price}</h5>
                </div>
            </Container>
        </StyledLink>
    )
}

export default SearchSuggestion

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const Image = styled.img`
    width: 3rem;
`

const TitleContainer = styled.div `
    margin: 0 20px;
    @media screen and (max-width: 980px) {
        display: block;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
`