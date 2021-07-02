import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchSuggestion = ({
  id, src, alt, title, price,
}) => (
  <StyledLink to={`/product/${id}`}>
    <Container>
      <div>
        <Image
          src={src}
          alt={alt}
        />
      </div>
      <TitleContainer>
        <h5>{title}</h5>
      </TitleContainer>
      <div>
        <h5>{price}</h5>
      </div>
    </Container>
  </StyledLink>
);

export default SearchSuggestion;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 3rem;
`;

const TitleContainer = styled.div`
    margin: 0 20px;
    @media screen and (max-width: 980px) {
        display: block;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
`;
